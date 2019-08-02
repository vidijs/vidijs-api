import { vFetch, isRequired } from './utils';

export function whoAmI({
  headers: propsHeaders = {},
  ...props
} = {}) {
  const path = '/API/whoami';
  const headers = { accept: 'text/plain', ...propsHeaders };
  return vFetch({
    path,
    headers,
    ...props,
  });
}

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

export function getUserGraph({
  userName = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/user/${userName}/graph`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function updateUser({
  userName = isRequired(),
  userDocument = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/user/${userName}`;
  const body = JSON.stringify(userDocument);
  return vFetch({
    path,
    method: 'PUT',
    body,
    queryParams,
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

export function createAlias({
  userName,
  alias,
  ...props
}) {
  const path = `/API/user/${userName}/alias/${alias}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeAlias({
  userName,
  alias,
  ...props
}) {
  const path = `/API/user/${userName}/alias/${alias}`;
  return vFetch({
    path,
    method: 'DELETE',
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
  realName,
  ...props
}) {
  const headers = { accept: 'text/plain', contentType: 'text/plain' };
  const path = `/API/user/${userName}/realname`;
  return vFetch({
    path,
    body: realName,
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

export function getToken({
  queryParams,
  headers: propsHeaders = {},
  ...props
} = {}) {
  const path = '/API/token';
  const headers = { accept: 'text/plain', ...propsHeaders };
  return vFetch({
    path,
    queryParams,
    headers,
    ...props,
  });
}

export function listKey({
  userName,
  ...props
}) {
  const path = `/API/user/${userName}/key`;
  return vFetch({
    path,
    ...props,
  });
}

export function getKey({
  userName,
  keyId,
  ...props
}) {
  const path = `/API/user/${userName}/key/${keyId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function createKey({
  userName,
  queryParams,
  ...props
}) {
  const path = `/API/user/${userName}/key/`;
  return vFetch({
    path,
    queryParams,
    method: 'POST',
    ...props,
  });
}

export function updateKey({
  userName,
  keyId,
  accessKeyDocument,
  ...props
}) {
  const path = `/API/user/${userName}/key/${keyId}`;
  const body = JSON.stringify(accessKeyDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeKey({
  userName,
  keyId,
  ...props
}) {
  const path = `/API/user/${userName}/key/${keyId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
