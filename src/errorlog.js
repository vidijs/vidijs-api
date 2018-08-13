import { vFetch } from './utils';

export function listErrorLogs({
  ...props
} = {}) {
  return vFetch({
    path: '/API/error',
    ...props,
  });
}

export default listErrorLogs;
