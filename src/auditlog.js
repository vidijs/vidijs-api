import { vFetch } from './utils';

export function listAuditLog({
  queryParams,
  ...props
} = {}) {
  const path = '/API/log/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export default listAuditLog;
