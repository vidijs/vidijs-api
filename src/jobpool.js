import { vFetch } from './utils';

export function listJobPool({
  ...props
} = {}) {
  const path = '/API/configuration/job-pool';
  return vFetch({
    path,
    ...props,
  });
}

export function updateJobPoolList({
  jobPoolListDocument,
  ...props
}) {
  const path = '/API/configuration/job-pool';
  const body = JSON.stringify(jobPoolListDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeJobPoolList({
  ...props
} = {}) {
  const path = '/API/configuration/job-pool';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeJobPool({
  jobPoolPriority,
  ...props
}) {
  const path = `/API/configuration/job-pool/${jobPoolPriority}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
