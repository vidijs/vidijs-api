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
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(searchDocument);
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
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(searchDocument);
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
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(searchDocument);
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
  autocompleteDocument,
  ...props
}) {
  const body = JSON.stringify(autocompleteDocument);
  return vFetch({
    path: '/API/search/autocomplete/',
    method: 'PUT',
    body,
    ...props,
  });
}
