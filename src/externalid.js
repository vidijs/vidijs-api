import { vFetch } from './utils';

export function listExternalIdName({
  ...props
} = {}) {
  const path = '/API/external-id';
  return vFetch({
    path,
    ...props,
  });
}

export function getExternalIdName({
  idName,
  ...props
}) {
  const path = `/API/external-id/${idName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateExternalIdName({
  idName,
  externalIdNameDocument,
  ...props
}) {
  const body = JSON.stringify(externalIdNameDocument);
  const path = `/API/external-id/${idName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeExternalIdName({
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
  resource,
  ...props
}) {
  const path = `/API/${resource}/external-id/`;
  return vFetch({
    path,
    ...props,
  });
}

export function createExternalId({
  resource,
  externalId,
  ...props
}) {
  const path = `/API/${resource}/external-id/${externalId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeExternalId({
  resource,
  externalId,
  ...props
}) {
  const path = `/API/${resource}/external-id/${externalId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}


export function removeAllExternalId({
  resource,
  ...props
}) {
  const path = `/API/${resource}/external-id`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
