import { vFetch, isRequired } from './utils';

export function listTaskGroup({
  ...props
} = {}) {
  const path = '/API/task-group';
  return vFetch({
    path,
    ...props,
  });
}

export function updateTaskGroup({
  groupName = isRequired(),
  taskGroupDocument,
  ...props
}) {
  const path = `/API/task-group/${groupName}`;
  const body = JSON.stringify(taskGroupDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function getTaskGroup({
  groupName = isRequired(),
  ...props
}) {
  const path = `/API/task-group/${groupName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function removeTaskGroup({
  groupName = isRequired(),
  ...props
}) {
  const path = `/API/task-group/${groupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeAllTaskGroup({
  ...props
} = {}) {
  const path = '/API/task-group';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateTaskGroupTranscoder({
  groupName = isRequired(),
  transcoderId = isRequired(),
  taskGroupDocument,
  ...props
}) {
  const path = `/API/task-group/${groupName}/transcoder/${transcoderId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeTaskGroupTranscoder({
  groupName = isRequired(),
  transcoderId = isRequired(),
  ...props
}) {
  const path = `/API/task-group/${groupName}/transcoder/${transcoderId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
