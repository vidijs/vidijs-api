import { vFetch } from './utils';

export function listExportLocation({
  ...props
} = {}) {
  return vFetch({
    path: '/API/export-location',
    ...props,
  });
}

export function getExportLocation({
  locationName,
  ...props
}) {
  return vFetch({
    path: `/API/export-location/${locationName}`,
    ...props,
  });
}

export function updateExportLocation({
  locationName,
  exportLocationDocument,
  ...props
}) {
  const body = JSON.stringify(exportLocationDocument);
  const path = `/API/export-location/${locationName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeExportLocation({
  locationName,
  ...props
}) {
  const path = `/API/export-location/${locationName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getExportLocationScript({
  locationName,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/export-location/${locationName}/script`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function updateExportLocationScript({
  locationName,
  ...props
}) {
  const headers = { accept: 'text/plain', contentType: 'text/plain' };
  const path = `/API/export-location/${locationName}/script`;
  return vFetch({
    path,
    headers,
    method: 'PUT',
    ...props,
  });
}
