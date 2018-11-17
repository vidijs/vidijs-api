import { vFetch } from './utils';

export function listSelfTest({
  noAuth = false,
  queryParams,
  ...props
} = {}) {
  const path = noAuth ? '/APInoauth/selftest/' : '/API/selftest/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getSelfTest({
  testName,
  ...props
} = {}) {
  const path = `/API/selftest/${testName}`;
  return vFetch({
    path,
    ...props,
  });
}
