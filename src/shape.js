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

export function createShape({
  itemId,
  shapeDocument = {},
  queryParams,
  ...props
}) {
  const body = JSON.stringify(shapeDocument);
  const path = `/API/item/${itemId}/shape/create`;
  return vFetch({
    path,
    body,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function updateShapePlaceholder({
  itemId,
  shapeId,
  simpleMetadataDocument = {},
  queryParams,
  ...props
}) {
  const body = JSON.stringify(simpleMetadataDocument);
  const path = `/API/item/${itemId}/shape/${shapeId}/placeholder`;
  return vFetch({
    path,
    body,
    method: 'PUT',
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

export function createShapeImportImp({
  itemId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/imp`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createShapeImportRaw({
  itemId,
  queryParams,
  headers = {},
  file,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/raw`;
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers: { contentType: 'application/octet-stream', ...headers },
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

export function getShapeGraph({
  itemId,
  shapeId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/graph`;
  const headers = { accept: 'image/png' };
  return vFetch({
    path,
    headers,
    queryParams,
    ...props,
  });
}

export function getShapeGraphDot({
  itemId,
  shapeId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/graph/dot`;
  const headers = { accept: 'text/plain' };
  return vFetch({
    path,
    headers,
    queryParams,
    ...props,
  });
}

export function getShapeCpl({
  itemId,
  shapeId,
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/cpl`;
  const headers = { accept: 'application/xml' };
  return vFetch({
    path,
    headers,
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

export function listShapeEssence({
  itemId,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/version`;
  return vFetch({
    path,
    ...props,
  });
}

export function getShapeEssence({
  itemId,
  versionId,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/version/${versionId}`;
  return vFetch({
    path,
    ...props,
  });
}

export function removeShapeEssence({
  itemId,
  versionId,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/version/${versionId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function copyShapeEssence({
  itemId,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/version/`;
  return vFetch({
    path,
    method: 'POST',
    ...props,
  });
}

export function copyShapeEssenceSpecific({
  itemId,
  versionId,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/version/${versionId}`;
  return vFetch({
    path,
    method: 'POST',
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

export function removeShapeAll({
  itemId = isRequired(),
  queryParams,
  ...props
} = {}) {
  const path = `/API/item/${itemId}/shape/`;
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

export function createThumbnail({
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

export function createDeduction({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/update`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function listShapeFile({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams,
  matrixParams = [],
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}file`;
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getShapeTag({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/tag`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function updateShapeTag({
  itemId = isRequired(),
  shapeId = isRequired(),
  tagName = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/tag/${tagName}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeShapeTag({
  itemId = isRequired(),
  shapeId = isRequired(),
  tagName = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/tag/${tagName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getShapeMime({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/mime`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function updateShapeMime({
  itemId = isRequired(),
  shapeId = isRequired(),
  mimeType = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/mime/${mimeType}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function removeShapeMime({
  itemId = isRequired(),
  shapeId = isRequired(),
  mimeType = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/mime/${mimeType}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
