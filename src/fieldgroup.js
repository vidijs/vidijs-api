import { vFetch } from './utils';

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
  fieldGroupDocument,
  queryParams,
  ...props
}) {
  const body = JSON.stringify(fieldGroupDocument);
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
