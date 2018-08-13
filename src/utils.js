import axios from 'axios';

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


function setQueryParams(queryParams) {
  const paramKeys = Object.keys(queryParams);
  if (paramKeys.length === 0) return '';

  const reducer = (accumulator, currentKey, currentIndex) => {
    if (typeof queryParams[currentKey] === 'undefined') {
      return accumulator;
    }
    const separator = currentIndex > 0 ? '&' : '';
    if (currentKey === 'jobmetadata') {
      const { jobmetadata } = queryParams;
      const jobmetadataReducer = (a, c, i) => `${a}${i > 0 ? '&' : ''}jobmetadata=${c.key}%3D${c.value}`;
      const jobmetadataValue = jobmetadata.reduce(jobmetadataReducer, '');
      return `${accumulator}${separator}${jobmetadataValue}`;
    }
    return `${accumulator}${separator}${currentKey}=${queryParams[currentKey]}`;
  };
  const paramStr = paramKeys.reduce(reducer, '?');
  return paramStr;
}

function setMatrix(matrix) {
  if (matrix.length === 0) return '';
  const reducer = (accumulator, currentMx) => `${accumulator};${Object.keys(currentMx)[0]}=${Object.values(currentMx)[0]}`;
  const matrixStr = matrix.reduce(reducer, '');
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
        response.ok = (response.statusText === 'OK');
        response.json = () => response.data;
        response.text = () => response.data;
        resolve(response);
      })
      .catch(error => reject(error));
  });
}

export default vFetch;
