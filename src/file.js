import { vFetch } from './utils';

export function listFile({
  storageId,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = storageId ? `/API/storage/${storageId}/file/` : '/API/storage/file/';
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function listFileImportable({
  storageId,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = storageId ? `/API/storage/${storageId}/file/importable/` : '/API/storage/file/importable/';
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getFile({
  fileId,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/`;
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function createFileRaw({
  storageId,
  file,
  queryParams,
  ...props
}) {
  const headers = { contentType: 'application/octet-stream' };
  const path = `/API/storage/${storageId}/file/data`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers,
    queryParams,
    ...props,
  });
}

export function getFileRaw({
  fileId,
  ...props
}) {
  const headers = { accept: 'application/octet-stream' };
  const path = `/API/storage/file/${fileId}/data`;
  return vFetch({
    path,
    headers,
    responseType: 'blob',
    ...props,
  });
}

export function updateFileRaw({
  fileId,
  file,
  queryParams,
  ...props
}) {
  const headers = { contentType: 'application/octet-stream' };
  const path = `/API/storage/file/${fileId}/data/`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers,
    queryParams,
    ...props,
  });
}

export function createFileImport({
  fileId,
  metadataDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(metadataDocument);
  const path = `/API/storage/file/${fileId}/import/`;
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createFileImportAssetMap({
  fileId,
  metadataDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(metadataDocument);
  const path = `/API/storage/file/${fileId}/import/assetmap`;
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createFileImportPath({
  storageId,
  metadataDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(metadataDocument);
  const path = `/API/storage/${storageId}/import/`;
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createFileMove({
  fileId,
  targetStorageId,
  queryParams,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/storage/${targetStorageId}/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function removeFile({
  fileId,
  queryParams,
  ...props
}) {
  const path = `/API/storage/file/${fileId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function createFileEntity({
  storageId,
  fileDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(fileDocument);
  const path = `/API/storage/${storageId}/file/`;
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function removeFileEntity({
  fileId,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/entity`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function createFilePath({
  fileId,
  queryParams,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/path/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function updateFileState({
  fileId,
  state,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/state/${state}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function abandonFile({
  fileId,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/abandon`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function reindexFile({
  fileId,
  ...props
}) {
  const path = `/API/storage/file/${fileId}/re-index`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}
