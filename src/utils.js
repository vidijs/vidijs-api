import axios from 'axios';

export { axios as defaultClient };

export function clientLogin({ baseUrl, token }) {
  if (baseUrl) { axios.defaults.baseURL = baseUrl; }
  if (token) { axios.defaults.headers.Authorization = `token ${token}`; }
}

export function clientLogout() {
  delete axios.defaults.headers.Authorization;
}

function btoa(str) {
  const buffer = (str instanceof Buffer) ? str : Buffer.from(str.toString(), 'binary');
  return buffer.toString('base64');
}

function setDefaultHeaders({
  username = false,
  password = false,
  token,
  contentType = 'application/json',
  accept = 'application/json',
  ...props
} = {}) {
  const headers = {
    'content-type': contentType,
    Accept: accept,
  };
  if (username) {
    const encodedAuth = btoa(`${username}:${password}`);
    headers.Authorization = `Basic ${encodedAuth}`;
  } else if (token) {
    headers.Authorization = `token ${token}`;
  }
  return { ...props, ...headers };
}


const KV_PARAMS = [
  'jobmetadata',
  'jobMetadata',
  'notificationdata',
  'notificationData',
  'methodMetadata',
];


function setQueryParams(queryParams) {
  const paramKeys = Object.keys(queryParams);
  if (paramKeys.length === 0) return '';

  const reducer = (accumulator, currentKey, currentIndex) => {
    if (typeof queryParams[currentKey] === 'undefined') {
      return accumulator;
    }
    const separator = currentIndex > 0 ? '&' : '';
    if (KV_PARAMS.includes(currentKey)) {
      const kvReducer = (a, c, i) => `${a}${i > 0 ? '&' : ''}${currentKey}=${c.key}%3D${c.value}`;
      const kvString = queryParams[currentKey].reduce(kvReducer, '');
      return `${accumulator}${separator}${kvString}`;
    }
    return `${accumulator}${separator}${currentKey}=${queryParams[currentKey]}`;
  };
  const paramStr = paramKeys.reduce(reducer, '?');
  return paramStr;
}

function setMatrix(matrix) {
  let matrixList = matrix;
  if (!Array.isArray(matrix)) {
    matrixList = Object.entries(matrix);
  }
  if (matrixList.length === 0) return '';
  const reducer = (a, c) => {
    let matrixKey;
    let matrixValue;
    if (Array.isArray(c)) {
      [matrixKey, matrixValue] = c;
    } else {
      [matrixKey] = Object.keys(c);
      [matrixValue] = Object.values(c);
    }
    if (matrixValue === '' || matrixValue === undefined) {
      return a;
    }
    return `${a};${matrixKey}=${encodeURIComponent(matrixValue)}`;
  };
  const matrixStr = matrixList.reduce(reducer, '');
  return matrixStr;
}


export function isRequired() {
  throw new Error('Missing property');
}

export function vFetch({
  path,
  method = 'GET',
  body: data,
  headers: extraHeaders = {},
  queryParams = {},
  matrixParams = [],
  ...props
} = {}) {
  const params = setQueryParams(queryParams);
  const matrix = setMatrix(matrixParams);
  const headers = setDefaultHeaders(extraHeaders);
  const url = `${path}${matrix}${params}`;
  const request = {
    method,
    url,
    headers,
    data,
    ...props,
  };
  return new Promise((resolve, reject) => {
    axios(request)
      .then((response) => {
        response.ok = (response.status >= 100 && response.status <= 399);
        response.json = () => response.data;
        response.text = () => response.data;
        resolve(response);
      })
      .catch(error => reject(error));
  });
}

export default vFetch;
