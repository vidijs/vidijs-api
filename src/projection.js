import { vFetch } from './utils';

export function listProjection({
  queryParams,
  ...props
} = {}) {
  const path = '/API/projection/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getProjectionOutgoing({
  projectionId,
  ...props
}) {
  const path = `/API/projection/${projectionId}/outgoing`;
  const headers = { accept: 'application/xml' };
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function getProjectionIncoming({
  projectionId,
  ...props
}) {
  const path = `/API/projection/${projectionId}/incoming`;
  const headers = { accept: 'application/xml' };
  return vFetch({
    path,
    headers,
    ...props,
  });
}


export function updateProjectionOutgoing({
  projectionId,
  projectionDocument,
  ...props
}) {
  const path = `/API/projection/${projectionId}/outgoing`;
  const headers = { contentType: 'application/xml', accept: 'application/xml' };
  return vFetch({
    path,
    body: projectionDocument,
    method: 'PUT',
    headers,
    ...props,
  });
}

export function updateProjectionIncoming({
  projectionId,
  projectionDocument,
  ...props
}) {
  const path = `/API/projection/${projectionId}/incoming`;
  const headers = { contentType: 'application/xml', accept: 'application/xml' };
  return vFetch({
    path,
    body: projectionDocument,
    method: 'PUT',
    headers,
    ...props,
  });
}


export function removeProjection({
  projectionId,
  ...props
}) {
  const path = `/API/projection/${projectionId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
