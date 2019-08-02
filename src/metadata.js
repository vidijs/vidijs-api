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

export function listEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function getEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  changesetId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/${changesetId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function previousEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  changesetId = isRequired(),
  queryParams,
  matrixParams = [],
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/${changesetId}/compareTo/previous`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function compareEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  changesetId = isRequired(),
  fromChangesetId = isRequired(),
  queryParams,
  matrixParams = [],
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/${changesetId}/compareTo/${fromChangesetId}`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function updateEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  changesetId = isRequired(),
  metadataDocument = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/${changesetId}/`;
  return vFetch({
    path,
    method: 'PUT',
    body: metadataDocument,
    ...props,
  });
}

export function updateAllEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  metadataChangeSetDocument = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes`;
  return vFetch({
    path,
    method: 'PUT',
    body: metadataChangeSetDocument,
    ...props,
  });
}

export function trimAllEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/trim`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function trimEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  changesetId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/${changesetId}/trim`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeEntityMetadataChange({
  entity = isRequired(),
  entityId = isRequired(),
  changesetId = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/changes/${changesetId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateEntityMetadataEntry({
  entity = isRequired(),
  entityId = isRequired(),
  uuid = isRequired(),
  metadataEntryDocument = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/entry/${uuid}`;
  return vFetch({
    path,
    method: 'PUT',
    body: metadataEntryDocument,
    ...props,
  });
}

export function updateAllEntityMetadataEntry({
  entity = isRequired(),
  entityId = isRequired(),
  metadataEntryListDocument = isRequired(),
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/entry/`;
  return vFetch({
    path,
    method: 'PUT',
    body: metadataEntryListDocument,
    ...props,
  });
}

export function getEntityMetadataGraph({
  entity = isRequired(),
  entityId = isRequired(),
  headers: propHeaders = {},
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/graph`;
  const headers = { accept: 'image/png', ...propHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function getEntityMetadataGraphDot({
  entity = isRequired(),
  entityId = isRequired(),
  headers: propHeaders = {},
  ...props
}) {
  const path = `/API/${entity}/${entityId}/metadata/graph/dot`;
  const headers = { accept: 'text/plain', ...propHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
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
