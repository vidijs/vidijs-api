import { vFetch, isRequired } from './utils';

export function listScheduledRequest({
  queryParams,
  ...props
}) {
  const path = '/API/scheduled-request/';
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function getScheduledRequest({
  requestId = isRequired(),
  ...props
}) {
  const path = `/API/scheduled-request/${requestId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getScheduledRequestResponse({
  requestId = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/scheduled-request/${requestId}/response`;
  const headers = { accept: '*/*', ...propsHeaders };
  return vFetch({
    path,
    headers,
    method: 'GET',
    ...props,
  });
}

export function removeScheduledRequest({
  requestId = isRequired(),
  ...props
}) {
  const path = `/API/scheduled-request/${requestId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeAllScheduledRequest({
  ...props
}) {
  const path = '/API/scheduled-request';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
