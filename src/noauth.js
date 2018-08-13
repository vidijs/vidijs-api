import { vFetch } from './utils';

export function getSelfTest({
  queryParams,
  ...props
} = {}) {
  const path = '/APInoauth/selftest/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function createInit({
  ...props
} = {}) {
  const headers = { accept: 'text/plain' };
  const path = '/APIinit/';
  return vFetch({
    path,
    method: 'POST',
    headers,
    ...props,
  });
}

export default createInit;
