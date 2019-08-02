import { vFetch, isRequired } from './utils';

export function createProject({
  projectDocument = isRequired(),
  ...props
}) {
  const path = '/API/collection/project/';
  return vFetch({
    path,
    method: 'POST',
    body: projectDocument,
    ...props,
  });
}

export function createProjectVersion({
  collectionId = isRequired(),
  projectVersionDocument = isRequired(),
  ...props
}) {
  const path = `/API/collection/${collectionId}/version`;
  return vFetch({
    path,
    method: 'POST',
    body: projectVersionDocument,
    ...props,
  });
}

export function listProjectDefinition({
  collectionId = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition`;
  const headers = { accept: 'text/plain', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function updateProjectDefinition({
  collectionId = isRequired(),
  format = isRequired(),
  body = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}`;
  const headers = { contentType: 'application/octet-stream', ...propsHeaders };
  return vFetch({
    path,
    method: 'PUT',
    body,
    headers,
    ...props,
  });
}

export function getProjectDefinition({
  collectionId = isRequired(),
  format = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}`;
  const headers = { accept: 'application/octet-stream', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function removeProjectDefinition({
  collectionId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getProjectDefinitionAsset({
  collectionId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}/asset`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateProjectDefinitionAsset({
  collectionId = isRequired(),
  format = isRequired(),
  essenceMappingsDocument = isRequired(),
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}/asset`;
  return vFetch({
    path,
    method: 'PUT',
    body: essenceMappingsDocument,
    ...props,
  });
}

export function removeProjectDefinitionAsset({
  collectionId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}/asset`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getProjectDefinitionExtraData({
  collectionId = isRequired(),
  format = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}/extradata`;
  const headers = { accept: 'application/octet-stream', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function updateProjectDefinitionExtraData({
  collectionId = isRequired(),
  format = isRequired(),
  body = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}/extradata`;
  const headers = { contentType: 'application/octet-stream', ...propsHeaders };
  return vFetch({
    path,
    method: 'PUT',
    headers,
    body,
    ...props,
  });
}

export function removeProjectDefinitionExtraData({
  collectionId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/collection/${collectionId}/definition/${format}/extradata`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function inspectProjectFile({
  queryParams = isRequired(),
  essenceMappingsDocument,
  ...props
}) {
  const path = '/API/collection/project/inspect';
  return vFetch({
    path,
    method: 'POST',
    body: essenceMappingsDocument,
    queryParams,
    ...props,
  });
}

export function importProject({
  queryParams = isRequired(),
  essenceMappingsDocument,
  ...props
}) {
  const path = '/API/import/project';
  return vFetch({
    path,
    method: 'POST',
    body: essenceMappingsDocument,
    queryParams,
    ...props,
  });
}

export function importProjectSequence({
  queryParams = isRequired(),
  essenceMappingsDocument,
  ...props
}) {
  const path = '/API/import/project/sequence';
  return vFetch({
    path,
    method: 'POST',
    body: essenceMappingsDocument,
    queryParams,
    ...props,
  });
}


export function exportProjectVersionSequence({
  collectionId = isRequired(),
  queryParams = isRequired(),
  exportRequestDocument,
  ...props
}) {
  const path = `/API/collection/${collectionId}/version/export`;
  let method = 'GET';
  if (exportRequestDocument) {
    method = 'POST';
  }
  return vFetch({
    path,
    method,
    body: exportRequestDocument,
    queryParams,
    ...props,
  });
}
