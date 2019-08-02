import { vFetch, isRequired } from './utils';

export function listDeletionLock({
  queryParams,
  matrixParams = [],
  ...props
} = {}) {
  const path = '/API/deletion-lock';
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getDeletionLock({
  lockId = isRequired(),
  ...props
}) {
  const path = `/API/deletion-lock/${lockId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateDeletionLock({
  lockId = isRequired(),
  deletionLockDocument = isRequired(),
  ...props
}) {
  const path = `/API/deletion-lock/${lockId}`;
  return vFetch({
    path,
    method: 'PUT',
    body: deletionLockDocument,
    ...props,
  });
}

export function removeDeletionLock({
  lockId = isRequired(),
  ...props
}) {
  const path = `/API/deletion-lock/${lockId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function listEntityDeletionLock({
  entity = isRequired(),
  entityId = isRequired(),
  queryParams,
  matrixParams = [],
  ...props
}) {
  const path = `/API/${entity}/${entityId}/deletion-lock/`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function createEntityDeletionLock({
  entity = isRequired(),
  entityId = isRequired(),
  deletionLockDocument = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/deletion-lock/`;
  return vFetch({
    path,
    method: 'POST',
    body: deletionLockDocument,
    ...props,
  });
}

export function getEntityDeletionLock({
  entity = isRequired(),
  entityId = isRequired(),
  lockId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/deletion-lock/${lockId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateEntityDeletionLock({
  entity = isRequired(),
  entityId = isRequired(),
  lockId = isRequired(),
  deletionLockDocument = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/deletion-lock/${lockId}`;
  return vFetch({
    path,
    method: 'PUT',
    body: deletionLockDocument,
    ...props,
  });
}

export function removeEntityDeletionLock({
  entity = isRequired(),
  entityId = isRequired(),
  lockId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/deletion-lock/${lockId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
