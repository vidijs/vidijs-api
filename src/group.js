import { vFetch } from './utils';

export function listGroup({
  queryParams,
  ...props
} = {}) {
  const path = '/API/group/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getGroup({
  groupName,
  ...props
}) {
  const path = `/API/group/${groupName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateGroup({
  groupName,
  groupDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(groupDocument);
  const path = `/API/group/${groupName}/`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeGroup({
  groupName,
  ...props
}) {
  const path = `/API/group/${groupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function searchGroup({
  groupSearchDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(groupSearchDocument);
  const path = '/API/group/';
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function getGroupRoleStatus({
  groupName,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/group/${groupName}/role`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function getGroupDescription({
  groupName,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/group/${groupName}/description`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function updateGroupDescription({
  groupName,
  description,
  ...props
}) {
  const headers = { accept: 'text/plain', contentType: 'text/plain' };
  const path = `/API/group/${groupName}/description`;
  return vFetch({
    path,
    body: description,
    method: 'PUT',
    headers,
    ...props,
  });
}

export function getGroupParents({
  groupName,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/group/${groupName}/parents/`;
  return vFetch({
    path,
    headers,
    queryParams,
    ...props,
  });
}

export function getGroupChildren({
  groupName,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/group/${groupName}/children/`;
  return vFetch({
    path,
    headers,
    queryParams,
    ...props,
  });
}

export function addGroupChildren({
  groupName,
  childGroupName,
  ...props
}) {
  const path = `/API/group/${groupName}/group/${childGroupName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeGroupChildren({
  groupName,
  childGroupName,
  ...props
}) {
  const path = `/API/group/${groupName}/group/${childGroupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getGroupUser({
  groupName,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/group/${groupName}/users/`;
  return vFetch({
    path,
    headers,
    queryParams,
    ...props,
  });
}

export function addGroupUser({
  groupName,
  userName,
  ...props
}) {
  const path = `/API/group/${groupName}/user/${userName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeGroupUser({
  groupName,
  userName,
  ...props
}) {
  const path = `/API/group/${groupName}/user/${userName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
