import { vFetch, isRequired } from './utils';

export function listGlobalMetadata({
  matrixParams = [],
  ...props
} = {}) {
  const path = '/API/metadata';
  return vFetch({
    path,
    method: 'GET',
    matrixParams,
    ...props,
  });
}

export function updateGlobalMetadata({
  metadataDocument = isRequired(),
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = '/API/metadata';
  return vFetch({
    path,
    method: 'PUT',
    body: metadataDocument,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getGlobalMetadata({
  uuid = isRequired(),
  ...props
}) {
  const path = `/API/metadata/${uuid}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function removeGlobalMetadata({
  uuid = isRequired(),
  ...props
} = {}) {
  const path = `/API/metadata/${uuid}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
