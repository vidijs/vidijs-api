import { vFetch } from './utils';

export function updateEntityMetadata({
  entity,
  entityId,
  metadataDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(metadataDocument);
  const path = `/API/${entity}/${entityId}/metadata`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function moveEntityMetadata({
  entity,
  entityId,
  metadataDocument,
  queryParams,
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/move`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function getEntityMetadata({
  entity,
  entityId,
  matrixParams = [],
  queryParams = {},
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
    ...props,
  });
}


export function getMetadata({
  metadataUuid,
  ...props
}) {
  const path = `/API/metadata/${metadataUuid}/`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function removeMetadata({
  metadataUuid,
  ...props
}) {
  const path = `/API/metadata/${metadataUuid}/`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}


export function getMetadataGlobal({
  matrixParams = [],
  ...props
} = {}) {
  const path = '/API/metadata/';
  return vFetch({
    path,
    method: 'GET',
    matrixParams,
    ...props,
  });
}


export function updateMetadataGlobal({
  metadataDocument,
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(metadataDocument);
  const path = '/API/metadata/';
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}
