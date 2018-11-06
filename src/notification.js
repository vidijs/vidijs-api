import { vFetch } from './utils';

function getEntityTypeUrl(entityType) {
  if (entityType === 'file') {
    return 'storage/file';
  }
  if (['metadata', 'access'].includes(entityType)) {
    return 'item';
  }
  return entityType;
}

export function listNotification({
  entityType,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const path = `/API/${entityTypeUrl}/notification/`;
  return vFetch({
    path,
    ...props,
  });
}

export function listNotificationEntity({
  entityType,
  entityId,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const path = `/API/${entityTypeUrl}/${entityId}/notification/`;
  return vFetch({
    path,
    ...props,
  });
}

export function getNotification({
  notificationId,
  entityType,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const path = `/API/${entityTypeUrl}/notification/${notificationId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateNotification({
  notificationId,
  entityType,
  notificationDocument,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const body = JSON.stringify(notificationDocument);
  const path = `/API/${entityTypeUrl}/notification/${notificationId}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function createNotification({
  entityType,
  notificationDocument,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const body = JSON.stringify(notificationDocument);
  const path = `/API/${entityTypeUrl}/notification/`;
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function removeNotification({
  notificationId,
  entityType,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const path = `/API/${entityTypeUrl}/notification/${notificationId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getNotificationEntity({
  notificationId,
  entityType,
  entityId,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const path = `/API/${entityTypeUrl}/${entityId}/notification/${notificationId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateNotificationEntity({
  notificationId,
  entityType,
  entityId,
  notificationDocument,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const body = JSON.stringify(notificationDocument);
  const path = `/API/${entityTypeUrl}/${entityId}/notification/${notificationId}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function createNotificationEntity({
  entityType,
  notificationDocument,
  entityId,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const body = JSON.stringify(notificationDocument);
  const path = `/API/${entityTypeUrl}/${entityId}/notification/`;
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function removeNotificationEntity({
  notificationId,
  entityType,
  entityId,
  ...props
} = {}) {
  const entityTypeUrl = getEntityTypeUrl(entityType);
  const path = `/API/${entityTypeUrl}/${entityId}/notification/${notificationId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
