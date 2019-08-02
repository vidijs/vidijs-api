import { vFetch, isRequired } from './utils';

export function createCostEstimate({
  path: costPath = isRequired(),
  ...props
}) {
  const path = `/API/cost/${costPath}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getCostEstimate({
  costEstimateId = isRequired(),
  ...props
}) {
  const path = `/API/cost/${costEstimateId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}
