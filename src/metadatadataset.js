import { vFetch, isRequired } from './utils';

export function listMetadataDataset({
  ...props
} = {}) {
  const path = '/API/metadata/dataset';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getMetadataDataset({
  datasetId = isRequired(),
  ...props
}) {
  const path = `/API/metadata/dataset/${datasetId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateMetadataMigration({
  datasetId = isRequired(),
  body = isRequired(),
  ...props
}) {
  const path = `/API/metadata/dataset/${datasetId}`;
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removeMetadataDataset({
  datasetId = isRequired(),
  ...props
}) {
  const path = `/API/metadata/dataset/${datasetId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
