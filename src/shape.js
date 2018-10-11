import { vFetch } from './utils';

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
