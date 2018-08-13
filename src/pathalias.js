import { vFetch } from './utils';

export function listPathAlias({
  ...props
} = {}) {
  const path = '/API/configuration/path-alias';
  return vFetch({
    path,
    ...props,
  });
}

export function updatePathAlias({
  pathAliasConfigurationDocument,
  ...props
}) {
  const path = '/API/configuration/path-alias';
  const body = JSON.stringify(pathAliasConfigurationDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}
