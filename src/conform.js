import { vFetch } from './utils';

export function createConform({
  conformRequestDocument,
  queryParams,
  ...props
}) {
  const path = '/API/conform';
  const body = JSON.stringify(conformRequestDocument);
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createConformItem({
  itemId,
  timelineFormat,
  conformRequestDocument,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/timeline/${timelineFormat}/conform`;
  const body = JSON.stringify(conformRequestDocument);
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}
