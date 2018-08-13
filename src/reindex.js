import { vFetch } from './utils';

export function getReindex({
  indexName,
  ...props
}) {
  const path = `/API/reindex/${indexName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function createReindex({
  indexName,
  queryParams,
  ...props
}) {
  const path = `/API/reindex/${indexName}/`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}
