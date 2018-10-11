import { vFetch, isRequired } from './utils';

export function listAutoImport({
  ...props
} = {}) {
  const path = '/API/storage/auto-import/';
  return vFetch({
    path,
    ...props,
  });
}

export function updateAutoImport({
  storageId = isRequired(),
  autoImportRuleDocument,
  ...props
}) {
  const path = `/API/storage/${storageId}/auto-import/`;
  const body = JSON.stringify(autoImportRuleDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function getAutoImport({
  storageId = isRequired(),
  ...props
}) {
  const path = `/API/storage/${storageId}/auto-import/`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function removeAutoImport({
  storageId = isRequired(),
  ...props
}) {
  const path = `/API/storage/${storageId}/auto-import/`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function enableAutoImport({
  storageId = isRequired(),
  ...props
}) {
  const path = `/API/storage/${storageId}/auto-import/enable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function disableAutoImport({
  storageId = isRequired(),
  ...props
}) {
  const path = `/API/storage/${storageId}/auto-import/disable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}
