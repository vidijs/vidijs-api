import { vFetch } from './utils';

export function listTransfer({
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = '/API/transfer/';
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getTransfer({
  transferId,
  ...props
}) {
  const path = `/API/transfer/${transferId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateTransferPriority({
  transferId,
  queryParams,
  ...props
}) {
  const path = `/API/transfer/${transferId}`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}
