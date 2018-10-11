import { vFetch, isRequired } from './utils';

export function listQuota({
  ...props
} = {}) {
  const path = '/API/quota/';
  return vFetch({
    path,
    ...props,
  });
}

export function createQuota({
  quotaRuleDocument,
  ...props
}) {
  const path = '/API/quota/';
  const body = JSON.stringify(quotaRuleDocument);
  return vFetch({
    path,
    body,
    method: 'POST',
    ...props,
  });
}

export function getQuota({
  ruleId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/quota/${ruleId}`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function evaluateQuota({
  ruleId = isRequired(),
  ...props
}) {
  const path = `/API/quota/${ruleId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}


export function removeQuota({
  ruleId = isRequired(),
  ...props
}) {
  const path = `/API/quota/${ruleId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
