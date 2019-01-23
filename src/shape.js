import { vFetch, isRequired } from './utils';

export function createShapePlaceholder({
  itemId,
  metadataDocument = {},
  queryParams,
  ...props
}) {
  const headers = { accept: 'text/plain' };
  const body = JSON.stringify(metadataDocument);
  const path = `/API/item/${itemId}/shape/placeholder`;
  return vFetch({
    path,
    body,
    headers,
    method: 'POST',
    queryParams,
    ...props,
  });
}


export function createShapeImport({
  itemId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}


export function listShape({
  itemId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}


export function getShape({
  itemId,
  shapeId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function createShapeTranscode({
  itemId,
  shapeId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/transcode`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createShapeEssenceImport({
  itemId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/essence`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createShapeEssenceImportRaw({
  itemId,
  queryParams,
  headers = {},
  file,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/essence/raw`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers: { contentType: 'application/octet-stream', ...headers },
    queryParams,
    ...props,
  });
}

export function removeShape({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams,
  ...props
} = {}) {
  const path = `/API/item/${itemId}/shape/${shapeId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function createTranscode({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/transcode`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}
