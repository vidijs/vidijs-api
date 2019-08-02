import { vFetch, isRequired } from './utils';

export function getMetadataSchema({
  ...props
} = {}) {
  const path = '/API/metadata-schema';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateMetadataSchema({
  metadataSchemaDocument = isRequired(),
  ...props
}) {
  const path = '/API/metadata-schema';
  return vFetch({
    path,
    method: 'PUT',
    body: metadataSchemaDocument,
    ...props,
  });
}

export function removeMetadataSchema({
  ...props
} = {}) {
  const path = '/API/metadata-schema';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getMetadataSchemaGroup({
  groupName = isRequired(),
  ...props
} = {}) {
  const path = `/API/metadata-schema${groupName}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateMetadataSchemaGroup({
  groupName = isRequired(),
  metadataSchemaGroupDocument = isRequired(),
  ...props
} = {}) {
  const path = `/API/metadata-schema${groupName}`;
  return vFetch({
    path,
    method: 'PUT',
    body: metadataSchemaGroupDocument,
    ...props,
  });
}

export function removeMetadataSchemaGroup({
  groupName = isRequired(),
  ...props
} = {}) {
  const path = `/API/metadata-schema${groupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getTerseMetadataSchema({
  ...props
} = {}) {
  const path = '/API/metadata-field/terse-schema';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}
