import { vFetch } from './utils';

export function listJob({
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  const path = '/API/job/';
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
    ...props,
  });
}

export function getJob({
  jobId,
  queryParams,
  ...props
}) {
  const path = `/API/job/${jobId}`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function createJob({
  queryParams,
  ...props
} = {}) {
  const path = '/API/job';
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function duplicateJob({
  jobId,
  queryParams,
  ...props
}) {
  const path = `/API/job/${jobId}/re-run`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function modifyJob({
  jobId,
  queryParams,
  ...props
}) {
  const path = `/API/job/${jobId}`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function abortJob({
  jobId,
  queryParams,
  ...props
}) {
  const path = `/API/job/${jobId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function deleteJob({
  queryParams,
  ...props
} = {}) {
  const path = '/API/job/';
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}
