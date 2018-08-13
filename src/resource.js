import { vFetch } from './utils';

export function listResource({
  ...props
} = {}) {
  const path = '/API/resource/';
  return vFetch({
    path,
    ...props,
  });
}

export function listResourceType({
  resourceType,
  ...props
}) {
  const path = `/API/resource/${resourceType}`;
  return vFetch({
    path,
    ...props,
  });
}

export function createResource({
  resourceType,
  resourceDocument,
  ...props
}) {
  const body = JSON.stringify(resourceDocument);
  const path = `/API/resource/${resourceType}`;
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function modifyResource({
  resourceType,
  resourceId,
  resourceDocument,
  ...props
}) {
  const body = JSON.stringify(resourceDocument);
  const path = `/API/resource/${resourceType}/${resourceId}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function getResource({
  resourceType,
  resourceId,
  ...props
}) {
  const path = `/API/resource/${resourceType}/${resourceId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function removeResource({
  resourceType,
  resourceId,
  ...props
}) {
  const path = `/API/resource/${resourceType}/${resourceId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function statusResource({
  resourceType,
  resourceId,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/resource/${resourceType}/${resourceId}/status`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}
