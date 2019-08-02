import { vFetch, isRequired } from './utils';

export function listItemBulkyMetadata({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/bulky`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function listShapeBulkyMetadata({
  itemId = isRequired(),
  shapeId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/metadata/bulky`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateAllItemBulkyMetadata({
  itemId = isRequired(),
  bulkyMetadataDocument = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/bulky`;
  return vFetch({
    path,
    method: 'PUT',
    body: bulkyMetadataDocument,
    ...props,
  });
}

export function updateAllShapeBulkyMetadata({
  itemId = isRequired(),
  shapeId = isRequired(),
  bulkyMetadataDocument = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/metadata/bulky`;
  return vFetch({
    path,
    method: 'PUT',
    body: bulkyMetadataDocument,
    ...props,
  });
}

export function removeAllItemBulkyMetadata({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/bulky`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeAllShapeBulkyMetadata({
  itemId = isRequired(),
  shapeId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/metadata/bulky`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}


export function getItemBulkyMetadata({
  itemId = isRequired(),
  key = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/bulky/${key}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getShapeBulkyMetadata({
  itemId = isRequired(),
  shapeId = isRequired(),
  key = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/metadata/bulky/${key}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateItemBulkyMetadata({
  itemId = isRequired(),
  key = isRequired(),
  value = isRequired(),
  matrixParams = [],
  headers: propHeaders = {},
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/bulky/${key}`;
  const headers = { accept: 'text/plain', ...propHeaders };
  return vFetch({
    path,
    method: 'PUT',
    body: value,
    matrixParams,
    headers,
    ...props,
  });
}

export function updateShapeBulkyMetadata({
  itemId = isRequired(),
  shapeId = isRequired(),
  key = isRequired(),
  value = isRequired(),
  matrixParams = [],
  headers: propHeaders = {},
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/metadata/bulky/${key}`;
  const headers = { accept: 'text/plain', ...propHeaders };
  return vFetch({
    path,
    method: 'PUT',
    body: value,
    matrixParams,
    headers,
    ...props,
  });
}

export function removeItemBulkyMetadata({
  itemId = isRequired(),
  key = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/metadata/bulky/${key}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeShapeBulkyMetadata({
  itemId = isRequired(),
  shapeId = isRequired(),
  key = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/metadata/bulky/${key}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
