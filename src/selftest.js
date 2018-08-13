import { vFetch } from './utils';

export function listSelfTest({
  queryParams,
  ...props
} = {}) {
  const path = '/API/selftest/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export default listSelfTest;
