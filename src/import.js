import { vFetch } from './utils';

export function createImportUri({
  metadataDocument = {},
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(metadataDocument);
  const path = '/API/import/';
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
    ...props,
  });
}

export function createImportRaw({
  file,
  headers = {},
  queryParams,
  ...props
}) {
  const path = '/API/import/raw/';
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers: { contentType: 'application/octet-stream', ...headers },
    queryParams,
    ...props,
  });
}

export function createImportRawNoAuth({
  file,
  headers = {},
  queryParams,
  ...props
}) {
  const path = '/APInoauth/import/raw/';
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers: { contentType: 'application/octet-stream', ...headers },
    queryParams,
    ...props,
  });
}

export function createImportRawPasskey({
  metadataDocument = {},
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(metadataDocument);
  const path = '/API/import/raw-passkey/';
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportImp({
  metadataDocument = {},
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(metadataDocument);
  const path = '/API/import/imp/';
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportPlaceholder({
  metadataDocument = {},
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(metadataDocument);
  const path = '/API/import/placeholder/';
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportComponent({
  itemId,
  component,
  queryParams,
  ...props
}) {
  const path = `/API/import/placeholder/${itemId}/${component}/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportComponentRaw({
  itemId,
  component,
  file,
  headers = {},
  queryParams,
  ...props
}) {
  const path = `/API/import/placeholder/${itemId}/${component}/raw/`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers: { contentType: 'application/octet-stream', ...headers },
    queryParams,
    ...props,
  });
}

export function createImportComponentRawNoAuth({
  itemId,
  component,
  file,
  headers = {},
  queryParams,
  ...props
}) {
  const path = `/APInoauth/import/placeholder/${itemId}/${component}/raw/`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers: { contentType: 'application/octet-stream', ...headers },
    queryParams,
    ...props,
  });
}

export function createImportItem({
  itemId,
  placeholderImportRequestDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(placeholderImportRequestDocument);
  const path = `/API/import/placeholder/${itemId}/`;
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportItemPasskey({
  itemId,
  queryParams,
  ...props
}) {
  const path = `/API/import/placeholder/${itemId}/raw-passkey/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportItemAdoptFile({
  itemId,
  component,
  fileId,
  queryParams,
  ...props
}) {
  const path = `/API/import/placeholder/${itemId}/${component}/adopt/${fileId}/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportItemSidecar({
  itemId,
  queryParams,
  ...props
}) {
  const path = `/API/import/sidecar/${itemId}/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createImportItemSidecarRaw({
  itemId,
  file,
  queryParams,
  ...props
}) {
  const headers = { contentType: 'application/octet-stream' };
  const path = `/API/import/sidecar/${itemId}/raw/`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers,
    queryParams,
    ...props,
  });
}
