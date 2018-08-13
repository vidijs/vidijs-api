import { vFetch } from './utils';

export function listConfigurationProperties({
  ...props
} = {}) {
  const path = '/API/configuration/properties';
  return vFetch({
    path,
    ...props,
  });
}

export function updateConfigurationProperties({
  configurationPropertyDocument,
  ...props
}) {
  const body = JSON.stringify(configurationPropertyDocument);
  const path = '/API/configuration/properties/';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removeConfigurationProperties({
  key,
  ...props
}) {
  const path = `/API/configuration/properties/${key}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
