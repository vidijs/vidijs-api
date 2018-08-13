import { vFetch } from './utils';

export function listDocumentMetadata({
  matrixParams = [],
  ...props
} = {}) {
  const path = '/API/document/';
  return vFetch({
    path,
    matrixParams,
    ...props,
  });
}

export function getDocumentMetadata({
  documentMetadataName,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = `/API/document/${documentMetadataName}`;
  return vFetch({
    path,
    matrixParams,
    queryParams,
    ...props,
  });
}

export function updateDocumentMetadata({
  documentMetadataName,
  metadataDocument,
  queryParams,
  ...props
}) {
  const path = `/API/document/${documentMetadataName}`;
  const body = JSON.stringify(metadataDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function getDocumentMetadataChanges({
  documentMetadataName,
  queryParams,
  ...props
}) {
  const path = `/API/document/${documentMetadataName}/changes`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}


export function removeDocumentMetadata({
  documentMetadataName,
  ...props
}) {
  const path = `/API/document/${documentMetadataName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
