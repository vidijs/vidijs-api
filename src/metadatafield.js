import { vFetch, isRequired } from './utils';
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

export function getMetadataFieldAllowedValues({
  fieldName = isRequired(),
  metadataFieldValueConstraintListDocument,
  queryParams,
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}/allowed-values/`;
  let method = 'GET';
  if (metadataFieldValueConstraintListDocument) {
    method = 'POST';
  }
  return vFetch({
    path,
    method,
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

export function listMetadataFieldAccess({
  fieldName = isRequired(),
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}/access`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function createMetadataFieldAccess({
  fieldName = isRequired(),
  metadataFieldAccessControlDocument = isRequired(),
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}/access`;
  return vFetch({
    path,
    method: 'POST',
    body: metadataFieldAccessControlDocument,
    ...props,
  });
}

export function removeMetadataFieldAccess({
  fieldName = isRequired(),
  accessId = isRequired(),
  ...props
}) {
  const path = `/API/metadata-field/${fieldName}/access/${accessId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function listMetadataFieldMergedAccess({
  queryParams,
  ...props
} = {}) {
  const path = '/API/metadata-field/merged-access';
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function getMetadataFieldMergedAccess({
  fieldName = isRequired(),
  queryParams,
  ...props
} = {}) {
  const path = `/API/metadata-field/${fieldName}/merged-access`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}
