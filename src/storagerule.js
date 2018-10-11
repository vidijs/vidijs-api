import { vFetch } from './utils';

export function listStorageRule({
  queryParams,
  ...props
} = {}) {
  const path = '/API/storage-rule/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getEntityStorageRule({
  entityType,
  entityId,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/storage-rule`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateEntityStorageRule({
  entityType,
  entityId,
  storageRuleDocument,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/storage-rule`;
  const body = JSON.stringify(storageRuleDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export const createEntityStorageRule = updateEntityStorageRule;

export function removeEntityStorageRule({
  entityType,
  entityId,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/storage-rule`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getEntityStorageRuleTag({
  entityType,
  entityId,
  tagName,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/storage-rule/${tagName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateEntityStorageRuleTag({
  entityType,
  entityId,
  tagName,
  storageRuleDocument,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/storage-rule/${tagName}`;
  const body = JSON.stringify(storageRuleDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export const createEntityStorageRuleTag = updateEntityStorageRuleTag;

export function removeEntityStorageRuleTag({
  entityType,
  entityId,
  tagName,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/storage-rule/${tagName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}


export function getStorageRuleShapeTag({
  tagName,
  ...props
}) {
  const path = `/API/shape-tag/storage-rule/${tagName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateStorageRuleShapeTag({
  tagName,
  storageRuleDocument,
  ...props
}) {
  const body = JSON.stringify(storageRuleDocument);
  const path = `/API/shape-tag/storage-rule/${tagName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export const createStorageRuleShapeTag = updateStorageRuleShapeTag;

export function removeStorageRuleShapeTag({
  tagName,
  ...props
}) {
  const path = `/API/shape-tag/storage-rule/${tagName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
