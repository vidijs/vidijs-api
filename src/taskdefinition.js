import { vFetch } from './utils';

export function listJobType({
  ...props
} = {}) {
  const path = '/API/jobtype';
  return vFetch({
    path,
    ...props,
  });
}

export function createJobType({
  jobType,
  queryParams,
  ...props
}) {
  const path = `/API/task-definition/jobtype/${jobType}/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function removeJobType({
  jobType,
  ...props
}) {
  const path = `/API/task-definition/jobtype/${jobType}/`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function listTaskDefinition({
  ...props
} = {}) {
  const path = '/API/task-definition';
  return vFetch({
    path,
    ...props,
  });
}

export function getTaskDefinitionType({
  taskDefinitionType,
  ...props
}) {
  const path = `/API/task-definition/jobtype/${taskDefinitionType}/`;
  return vFetch({
    path,
    ...props,
  });
}

export function createTaskDefinition({
  taskDefinitionListDocument,
  ...props
}) {
  const body = JSON.stringify(taskDefinitionListDocument);
  const path = '/API/task-definition';
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function getTaskDefinition({
  taskDefinitionId,
  ...props
}) {
  const path = `/API/task-definition/${taskDefinitionId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function getTaskDefinitionStep({
  taskDefinitionType,
  taskDefinitionStep,
  ...props
}) {
  const path = `/API/task-definition/jobtype/${taskDefinitionType}/step/${taskDefinitionStep}`;
  return vFetch({
    path,
    ...props,
  });
}

export function removeTaskDefinition({
  taskDefinitionId,
  ...props
}) {
  const path = `/API/task-definition/${taskDefinitionId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeTaskDefinitionStep({
  taskDefinitionType,
  taskDefinitionStep,
  ...props
}) {
  const path = `/API/task-definition/jobtype/${taskDefinitionType}/step/${taskDefinitionStep}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function modifyTaskDefinition({
  taskDefinitionId,
  taskDefinitionDocument,
  ...props
}) {
  const body = JSON.stringify(taskDefinitionDocument);
  const path = `/API/task-definition/${taskDefinitionId}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function modifyTaskDefinitionStep({
  taskDefinitionType,
  taskDefinitionStep,
  taskDefinitionDocument,
  ...props
}) {
  const body = JSON.stringify(taskDefinitionDocument);
  const path = `/API/task-definition/jobtype/${taskDefinitionType}/step/${taskDefinitionStep}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}


export function getTaskDefinitionScript({
  taskDefinitionId,
  ...props
}) {
  const headers = { accept: 'application/javascript' };
  const path = `/API/task-definition/${taskDefinitionId}/script`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function getTaskDefinitionStepScript({
  taskDefinitionType,
  taskDefinitionStep,
  ...props
}) {
  const headers = { accept: 'application/javascript' };
  const path = `/API/task-definition/jobtype/${taskDefinitionType}/step/${taskDefinitionStep}/script`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function updateTaskDefinitionScript({
  taskDefinitionId,
  scriptDocument,
  ...props
}) {
  const headers = { contentType: 'application/javascript', accept: 'application/javascript' };
  const path = `/API/task-definition/${taskDefinitionId}/script`;
  return vFetch({
    path,
    body: scriptDocument,
    method: 'PUT',
    headers,
    ...props,
  });
}

export function updateTaskDefinitionStepScript({
  taskDefinitionType,
  taskDefinitionStep,
  scriptDocument,
  ...props
}) {
  const headers = { contentType: 'application/javascript', accept: 'application/javascript' };
  const path = `/API/task-definition/jobtype/${taskDefinitionType}/step/${taskDefinitionStep}/script`;
  return vFetch({
    path,
    body: scriptDocument,
    method: 'PUT',
    headers,
    ...props,
  });
}
