import { vFetch, isRequired } from './utils';

export function updateItemSequence({
  itemId = isRequired(),
  sequenceDefinition,
  queryParams,
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/item/${itemId}/sequence`;
  const headers = { contentType: 'application/octet-stream', ...propsHeaders };
  return vFetch({
    path,
    method: 'PUT',
    headers,
    queryParams,
    ...props,
  });
}

export function listItemSequence({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/sequence`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getItemSequence({
  itemId = isRequired(),
  format = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/item/${itemId}/sequence/${format}`;
  const headers = { accept: '*/*', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function conformItemSequence({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/sequence/conform-metadata`;
  return vFetch({
    path,
    method: 'POST',
    ...props,
  });
}

export function renderItemSequence({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/sequence/render`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function removeItemSequence({
  itemId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/sequence/${format}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function renderSequence({
  sequenceRenderRequestDocument = isRequired(),
  queryParams,
  ...props
}) {
  const path = '/API/sequence/render';
  return vFetch({
    path,
    method: 'POST',
    body: sequenceRenderRequestDocument,
    queryParams,
    ...props,
  });
}

export function exportSequence({
  queryParams = isRequired(),
  exportRequestDocument,
  ...props
}) {
  const path = '/API/sequence/export';
  return vFetch({
    path,
    method: 'POST',
    body: exportRequestDocument,
    queryParams,
    ...props,
  });
}

export function exportItemSequence({
  itemId = isRequired(),
  queryParams = isRequired(),
  exportRequestDocument,
  ...props
}) {
  const path = `/API/item/${itemId}/sequence/export`;
  let method = 'GET';
  if (exportRequestDocument) {
    method = 'POST';
  }
  return vFetch({
    path,
    method,
    body: exportRequestDocument,
    queryParams,
    ...props,
  });
}
