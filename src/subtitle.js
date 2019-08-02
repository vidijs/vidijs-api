import { vFetch, isRequired } from './utils';

export function getSubtitleSCC({
  itemId = isRequired(),
  matrixParams = [],
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/export/scc`;
  return vFetch({
    path,
    method: 'GET',
    matrixParams,
    ...props,
  });
}

export function getSubtitleTTML({
  itemId = isRequired(),
  matrixParams = [],
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/export/ttml`;
  return vFetch({
    path,
    method: 'GET',
    matrixParams,
    ...props,
  });
}
