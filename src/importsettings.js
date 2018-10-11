import { vFetch, isRequired } from './utils';

export function listImportSettings({
  ...props
} = {}) {
  const path = '/API/import/settings';
  return vFetch({
    path,
    ...props,
  });
}

export function createImportSettings({
  importSettingsDocument,
  ...props
}) {
  const path = '/API/import/settings';
  const body = JSON.stringify(importSettingsDocument);
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function getImportSettings({
  settingsId = isRequired(),
  ...props
}) {
  const path = `/API/import/settings/${settingsId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateImportSettings({
  settingsId = isRequired(),
  importSettingsDocument,
  ...props
}) {
  const path = `/API/import/settings/${settingsId}`;
  const body = JSON.stringify(importSettingsDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}


export function removeImportSettings({
  settingsId = isRequired(),
  ...props
}) {
  const path = `/API/import/settings/${settingsId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
