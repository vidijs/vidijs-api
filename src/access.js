import { vFetch } from './utils';

export function listEntityAccess({
  entityType,
  entityId,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/`;
  return vFetch({
    path,
    ...props,
  });
}

export function createEntityAccess({
  entityType,
  entityId,
  queryParams,
  accessControlDocument,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/`;
  const body = JSON.stringify(accessControlDocument);
  return vFetch({
    path,
    body,
    queryParams,
    method: 'POST',
    ...props,
  });
}

export function getEntityAccess({
  entityType,
  entityId,
  accessId,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/${accessId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function getEntityAccessMerged({
  entityType,
  entityId,
  queryParams,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/merged-access/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getEntityAccessMergedGroup({
  entityType,
  entityId,
  queryParams,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/merged-access/group`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function removeEntityAccess({
  entityType,
  entityId,
  accessId,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/${accessId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateEntityOwner({
  entityType,
  entityId,
  userName,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/owner/${userName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function createEntityAccessBulk({
  entityType,
  entityId,
  accessControlListDocument,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/bulk`;
  const body = JSON.stringify(accessControlListDocument);
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function removeEntityAccessBulk({
  entityType,
  entityId,
  accessControlListDocument,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/bulk`;
  const body = JSON.stringify(accessControlListDocument);
  return vFetch({
    path,
    body,
    method: 'DELETE',
    ...props,
  });
}

export function getEntityAccessGraph({
  entityType,
  entityId,
  queryParams,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/graph`;
  const headers = { accept: 'image/png' };
  return vFetch({
    path,
    queryParams,
    headers,
    ...props,
  });
}

export function getEntityAccessGraphDot({
  entityType,
  entityId,
  queryParams,
  ...props
}) {
  const path = `/API/${entityType}/${entityId}/access/graph/dot`;
  const headers = { accept: 'text/plain' };
  return vFetch({
    path,
    queryParams,
    headers,
    ...props,
  });
}

export function createItemAllAccess({
  accessControlDocument,
  ...props
}) {
  const path = '/API/item/access/';
  const body = JSON.stringify(accessControlDocument);
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function removeItemAllAccess({
  ...props
} = {}) {
  const path = '/API/item/access/';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getImportAccess({
  ...props
} = {}) {
  const path = '/API/import/access/';
  return vFetch({
    path,
    ...props,
  });
}

export function updateImportAccessGroup({
  groupName,
  queryParams,
  ...props
}) {
  const path = `/API/import/access/group/${groupName}`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeImportAccessGroup({
  groupName,
  ...props
}) {
  const path = `/API/import/access/group/${groupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
