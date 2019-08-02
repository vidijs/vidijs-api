import { vFetch, isRequired } from './utils';

export function listAutoProjection({
  ...props
} = {}) {
  const path = '/API/auto-projection';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function listDisabledAutoProjection({
  ...props
} = {}) {
  const path = '/API/auto-projection/disable';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function listEnabledAutoProjection({
  ...props
} = {}) {
  const path = '/API/auto-projection/enable';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getAutoProjection({
  projectionName = isRequired(),
  ...props
}) {
  const path = `/API/auto-projection/${projectionName}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function createAutoProjection({
  projectionName = isRequired(),
  autoProjectionRuleDocument = isRequired(),
  ...props
}) {
  const path = `/API/auto-projection/${projectionName}`;
  return vFetch({
    path,
    method: 'PUT',
    body: autoProjectionRuleDocument,
    ...props,
  });
}

export function removeAutoProjection({
  projectionName = isRequired(),
  ...props
}) {
  const path = `/API/auto-projection/${projectionName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function enableAutoProjection({
  projectionName = isRequired(),
  ...props
}) {
  const path = `/API/auto-projection/${projectionName}/enable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function disableAutoProjection({
  projectionName = isRequired(),
  ...props
}) {
  const path = `/API/auto-projection/${projectionName}/disable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}
