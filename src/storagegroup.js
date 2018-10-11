import { vFetch, isRequired } from './utils';

export function listStorageGroup({
  ...props
} = {}) {
  const path = '/API/storage/storage-group/';
  return vFetch({
    path,
    ...props,
  });
}

export function createStorageGroup({
  groupName = isRequired(),
  ...props
}) {
  const path = `/API/storage/storage-group/${groupName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function getStorageGroup({
  groupName = isRequired(),
  ...props
}) {
  const path = `/API/storage/storage-group/${groupName}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function removeStorageGroup({
  groupName = isRequired(),
  ...props
}) {
  const path = `/API/storage/storage-group/${groupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function addStorageGroupStorage({
  groupName = isRequired(),
  storageId = isRequired(),
  ...props
}) {
  const path = `/API/storage/storage-group/${groupName}/${storageId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeStorageGroupStorage({
  groupName = isRequired(),
  storageId = isRequired(),
  ...props
}) {
  const path = `/API/storage/storage-group/${groupName}/${storageId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
