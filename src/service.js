import { vFetch } from './utils';

export function getServiceList({
  ...props
} = {}) {
  const path = '/API/vidispine-service';
  return vFetch({
    path,
    ...props,
  });
}

export function getService({
  serviceName,
  ...props
}) {
  const path = `/API/vidispine-service/service/${serviceName}`;
  return vFetch({
    path,
    ...props,
  });
}

export function enableService({
  serviceName,
  ...props
}) {
  const path = `/API/vidispine-service/service/${serviceName}/enable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function disableService({
  serviceName,
  ...props
}) {
  const path = `/API/vidispine-service/service/${serviceName}/disable`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}
