import { vFetch } from './utils';

export function listStorage({
  ...props
} = {}) {
  const path = '/API/storage/';
  return vFetch({
    path,
    ...props,
  });
}

export function createStorage({
  storageDocument,
  ...props
}) {
  const body = JSON.stringify(storageDocument);
  const path = '/API/storage/';
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function getStorage({
  storageId,
  ...props
}) {
  const path = `/API/storage/${storageId}/`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function modifyStorage({
  storageId,
  storageDocument,
  ...props
}) {
  const body = JSON.stringify(storageDocument);
  const path = `/API/storage/${storageId}/`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function modifyStorageMetadata({
  storageId,
  metadataDocument,
  ...props
}) {
  const body = JSON.stringify(metadataDocument);
  const path = `/API/storage/${storageId}/metadata`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function modifyStorageMetadataKey({
  storageId,
  key,
  metadataValue,
  ...props
}) {
  const headers = { contentType: 'text/plain' };
  const path = `/API/storage/${storageId}/metadata/${key}`;
  return vFetch({
    path,
    body: metadataValue,
    method: 'PUT',
    headers,
    ...props,
  });
}

export function removeStorageMetadata({
  storageId,
  key,
  ...props
}) {
  const path = `/API/storage/${storageId}/metadata/${key}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function rescanStorage({
  storageId,
  ...props
}) {
  const path = `/API/storage/${storageId}/rescan`;
  return vFetch({
    path,
    method: 'POST',
    ...props,
  });
}

export function createStorageMethod({
  storageId,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/storage/${storageId}/method/`;
  return vFetch({
    path,
    method: 'PUT',
    headers,
    queryParams,
    ...props,
  });
}

export function modifyStorageMethod({
  storageId,
  storageMethodId,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/storage/${storageId}/method/${storageMethodId}/`;
  return vFetch({
    path,
    method: 'PUT',
    headers,
    queryParams,
    ...props,
  });
}

export function removeStorageMethod({
  storageId,
  storageMethodId,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/storage/${storageId}/method/${storageMethodId}`;
  return vFetch({
    path,
    method: 'DELETE',
    headers,
    ...props,
  });
}

export function getStorageMethod({
  storageId,
  storageMethodId,
  ...props
}) {
  const path = `/API/storage/${storageId}/method/${storageMethodId}`;
  return vFetch({
    path,
    ...props,
  });
}


export function listStorageMethod({
  storageId,
  storageMethodId,
  ...props
}) {
  const path = `/API/storage/${storageId}/method/`;
  return vFetch({
    path,
    ...props,
  });
}

export function removeStorage({
  storageId,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/storage/${storageId}/`;
  return vFetch({
    path,
    method: 'DELETE',
    headers,
    queryParams,
    ...props,
  });
}
