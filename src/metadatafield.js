import { vFetch } from './utils';
import { getSimpleMetadata as getEntitySimpleMetadata } from './metadata';


export function listMetadataField({
  queryParams,
  ...props
} = {}) {
  const path = '/API/metadata-field/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getMetadataField({
  fieldName,
  queryParams,
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function updateMetadataField({
  fieldName,
  metadataFieldDocument,
  ...props
}) {
  const body = JSON.stringify(metadataFieldDocument);
  const path = `/API/metadata-field/${fieldName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeMetadataField({
  fieldName,
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getMetadataFieldValues({
  fieldName,
  queryParams,
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}/values/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function updateMetadataFieldValues({
  fieldName,
  simpleMetadataDocument,
  ...props
}) {
  const body = JSON.stringify(simpleMetadataDocument);
  const path = `/API/metadata-field/${fieldName}/values`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function getSimpleMetadata({
  fieldName,
  ...props
}) {
  const entityType = 'metadata-field';
  return getEntitySimpleMetadata({
    entityType,
    entityId: fieldName,
    ...props,
  });
}
