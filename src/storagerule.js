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
