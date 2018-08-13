import { vFetch } from './utils';

export function listAuditLogs({
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

export default listAuditLogs;
