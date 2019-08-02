import { vFetch, isRequired } from './utils';
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
  metadataFieldGroupSearchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(metadataFieldGroupSearchDocument);
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

export function listFieldGroupAccess({
  groupName = isRequired(),
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/access`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function createFieldGroupAccess({
  groupName = isRequired(),
  metadataFieldAccessControlDocument = isRequired(),
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/access`;
  return vFetch({
    path,
    method: 'POST',
    body: metadataFieldAccessControlDocument,
    ...props,
  });
}

export function removeFieldGroupAccess({
  groupName = isRequired(),
  accessId = isRequired(),
  ...props
}) {
  const path = `/API/metadata-field/field-group/${groupName}/access/${accessId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function listFieldGroupMergedAccess({
  queryParams,
  ...props
} = {}) {
  const path = '/API/metadata-field/field-group/merged-access';
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function getFieldGroupMergedAccess({
  groupName = isRequired(),
  queryParams,
  ...props
} = {}) {
  const path = `/API/metadata-field/field-group/${groupName}/merged-access`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}
