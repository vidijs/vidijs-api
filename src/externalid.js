import { vFetch } from './utils';

function getEntityTypeUrl(entityType) {
  if (entityType === 'field-group') {
    return 'metadata-field/field-group';
  }
  return entityType;
}

export function listExternalIdNamespace({
  ...props
} = {}) {
  const path = '/API/external-id';
  return vFetch({
    path,
    ...props,
  });
}

export function getExternalIdNamespace({
  idName,
  ...props
}) {
  const path = `/API/external-id/${idName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateExternalIdNamespace({
  idName,
  externalIdentifierNamespaceDocument,
  ...props
}) {
  const body = JSON.stringify(externalIdentifierNamespaceDocument);
  const path = `/API/external-id/${idName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeExternalIdNamespace({
  idName,
  ...props
}) {
  const path = `/API/external-id/${idName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function listExternalId({
  entityType,
  entityId,
  ...props
}) {
  const path = `/API/${getEntityTypeUrl(entityType)}/${entityId}/external-id/`;
  return vFetch({
    path,
    ...props,
  });
}

export function createExternalId({
  entityType,
  entityId,
  externalId,
  ...props
}) {
  const path = `/API/${getEntityTypeUrl(entityType)}/${entityId}/external-id/${externalId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeExternalId({
  entityType,
  entityId,
  externalId,
  ...props
}) {
  const path = `/API/${getEntityTypeUrl(entityType)}/${entityId}/external-id/${externalId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}


export function removeAllExternalId({
  entityType,
  entityId,
  ...props
}) {
  const path = `/API/${getEntityTypeUrl(entityType)}/${entityId}/external-id`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
