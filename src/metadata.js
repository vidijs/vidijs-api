import { vFetch, isRequired } from './utils';

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


export function getSimpleMetadata({
  entityType = isRequired(),
  entityId = isRequired(),
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/metadata`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getSimpleMetadataSubpath({
  entityType = isRequired(),
  entityId = isRequired(),
  subpath,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/metadata/${subpath}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateSimpleMetadata({
  simpleMetadataDocument,
  entityType = isRequired(),
  entityId = isRequired(),
  ...props
} = {}) {
  const body = JSON.stringify(simpleMetadataDocument);
  const path = `/API/${entityType}/${entityId}/metadata`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function updateSimpleMetadataSubpath({
  simpleMetadataDocument,
  entityType = isRequired(),
  entityId = isRequired(),
  subpath,
  ...props
} = {}) {
  const body = JSON.stringify(simpleMetadataDocument);
  const path = `/API/${entityType}/${entityId}/metadata/${subpath}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeSimpleMetadata({
  entityType = isRequired(),
  entityId = isRequired(),
  ...props
} = {}) {
  const path = `/API/${entityType}/${entityId}/metadata`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getSimpleMetadataKey({
  entityType = isRequired(),
  entityId = isRequired(),
  key = isRequired(),
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/metadata/${key}`;
  const headers = { accept: 'text/plain' };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function removeSimpleMetadataKey({
  entityType = isRequired(),
  entityId = isRequired(),
  key = isRequired(),
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/metadata/${key}`;
  const headers = { accept: 'text/plain' };
  return vFetch({
    path,
    method: 'DELETE',
    headers,
    ...props,
  });
}

export function updateSimpleMetadataKey({
  entityType = isRequired(),
  entityId = isRequired(),
  key = isRequired(),
  value,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/metadata/${key}`;
  const headers = { contentType: 'text/plain' };
  return vFetch({
    path,
    body: value,
    method: 'PUT',
    headers,
    ...props,
  });
}
