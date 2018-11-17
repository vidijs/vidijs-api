import { vFetch } from './utils';

export function listItemCollection({
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  return vFetch({
    path: '/API/search/',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function searchItemCollection({
  itemSearchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(itemSearchDocument);
  return vFetch({
    path: '/API/search/',
    method: 'PUT',
    body,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function searchShape({
  shapeSearchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(shapeSearchDocument);
  return vFetch({
    path: '/API/search/shape/',
    method: 'PUT',
    body,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function searchFile({
  fileSearchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(fileSearchDocument);
  return vFetch({
    path: '/API/search/file/',
    method: 'PUT',
    body,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function searchAutoComplete({
  autocompleteRequestDocument,
  ...props
}) {
  const body = JSON.stringify(autocompleteRequestDocument);
  return vFetch({
    path: '/API/search/autocomplete/',
    method: 'PUT',
    body,
    ...props,
  });
}
