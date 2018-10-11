import { vFetch } from './utils';

export function listVxa({
  ...props
} = {}) {
  const path = '/API/vxa/';
  return vFetch({
    path,
    ...props,
  });
}

export function createVxa({
  queryParams,
  ...props
} = {}) {
  const path = '/API/vxa/enable-ssh/';
  const headers = { accept: 'text/plain' };
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    headers,
    ...props,
  });
}

export function getVxa({
  vxaUuid,
  ...props
}) {
  const path = `/API/vxa/${vxaUuid}`;
  return vFetch({
    path,
    ...props,
  });
}

export function getVxaConfiguration({
  vxaUuid,
  ...props
}) {
  const path = `/API/vxa/${vxaUuid}/configuration`;
  return vFetch({
    path,
    ...props,
  });
}

export function removeVxa({
  vxaUuid,
  ...props
}) {
  const path = `/API/vxa/${vxaUuid}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
