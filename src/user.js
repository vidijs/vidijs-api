import { vFetch } from './utils';

export function getUserToken({
  username,
  password,
  queryParams,
  ...props
}) {
  const headers = { username, password, accept: 'text/plain' };
  const path = `/API/user/${username}/token`;
  return vFetch({
    path,
    headers,
    queryParams,
    ...props,
  });
}

export function listUser({
  queryParams,
  ...props
} = {}) {
  const path = '/API/user/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function createUser({
  userDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(userDocument);
  const path = '/API/user/';
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function getUser({
  userName,
  ...props
}) {
  const path = `/API/user/${userName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function disableUser({
  userName,
  queryParams,
  ...props
}) {
  const path = `/API/user/${userName}/`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function enableUser({
  userName,
  ...props
}) {
  const path = `/API/user/${userName}/enable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function searchUser({
  userSearchDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(userSearchDocument);
  const path = '/API/user/';
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}


export function getUserRealName({
  userName,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const path = `/API/user/${userName}/realname`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function updateUserRealName({
  userName,
  realname,
  ...props
}) {
  const headers = { accept: 'text/plain', contentType: 'text/plain' };
  const path = `/API/user/${userName}/realname`;
  return vFetch({
    path,
    body: realname,
    method: 'PUT',
    headers,
    ...props,
  });
}

export function updateUserPassword({
  userName,
  password,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain', contentType: 'text/plain' };
  const path = `/API/user/${userName}/password/`;
  return vFetch({
    path,
    body: password,
    method: 'PUT',
    headers,
    queryParams,
    ...props,
  });
}

export function validateUserPassword({
  userName,
  password,
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain', contentType: 'text/plain' };
  const path = `/API/user/${userName}/validate/`;
  return vFetch({
    path,
    body: password,
    method: 'GET',
    headers,
    queryParams,
    ...props,
  });
}

export function getUserSalt({
  userName,
  ...props
}) {
  const headers = { accept: 'application/octet-stream' };
  const path = `/API/user/${userName}/password/salt`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function createUserSalt({
  userName,
  ...props
}) {
  const headers = { accept: 'application/octet-stream' };
  const path = `/API/user/${userName}/password/salt`;
  return vFetch({
    path,
    method: 'POST',
    headers,
    ...props,
  });
}

export function getUserGroup({
  userName,
  queryParams,
  ...props
}) {
  const path = `/API/user/${userName}/groups/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getUserRole({
  userName,
  ...props
}) {
  const path = `/API/user/${userName}/roles`;
  return vFetch({
    path,
    ...props,
  });
}

export function getUserGroupRole({
  userName,
  ...props
}) {
  const path = `/API/user/${userName}/allgroups`;
  return vFetch({
    path,
    ...props,
  });
}


export function updateUserGroup({
  userName,
  groupListDocument,
  queryParams,
  ...props
}) {
  const path = `/API/user/${userName}/groups/`;
  const body = JSON.stringify(groupListDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}
