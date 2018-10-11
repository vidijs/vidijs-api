import { vFetch } from './utils';
import { getSimpleMetadata as getEntitySimpleMetadata } from './metadata';

export function listFieldGroup({
  queryParams,
  ...props
} = {}) {
  const path = '/API/metadata-field/field-group/';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getFieldGroup({
  groupName,
  queryParams,
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function updateFieldGroup({
  groupName,
  metadataFieldGroupDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(metadataFieldGroupDocument);
  const path = `/API/metadata-field/field-group/${groupName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeFieldGroup({
  groupName,
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateFieldGroupField({
  groupName,
  fieldName,
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/${fieldName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeFieldGroupField({
  groupName,
  fieldName,
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/${fieldName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateFieldGroupChild({
  groupName,
  childGroupName,
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/group/${childGroupName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeFieldGroupChild({
  groupName,
  childGroupName,
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/group/${childGroupName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function searchFieldGroup({
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(searchDocument);
  const path = '/API/metadata-field/field-group/';
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getSimpleMetadata({
  groupName,
  ...props
}) {
  const entityType = 'metadata-field/field-group';
  return getEntitySimpleMetadata({
    entityType,
    entityId: groupName,
    ...props,
  });
}
