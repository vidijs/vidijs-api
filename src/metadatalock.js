import { vFetch, isRequired } from './utils';

export function listEntityMetadataLock({
  entity = isRequired(),
  entityId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata-lock`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function createEntityMetadataLock({
  entity = isRequired(),
  entityId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata-lock/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function getEntityMetadataLock({
  entity = isRequired(),
  entityId = isRequired(),
  lockId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata-lock/${lockId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateEntityMetadataLock({
  entity = isRequired(),
  entityId = isRequired(),
  lockId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata-lock/${lockId}`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeEntityMetadataLock({
  entity = isRequired(),
  entityId = isRequired(),
  lockId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata-lock/${lockId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
