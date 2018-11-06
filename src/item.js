import { vFetch, isRequired } from './utils';
import { updateEntityMetadata, getEntityMetadata } from './metadata';

export function listItem({
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  const path = '/API/item/';
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getItem({
  itemId = isRequired(),
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  const path = `/API/item/${itemId}/`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function removeItem({
  itemId = isRequired(),
  queryParams,
  ...props
} = {}) {
  const path = `/API/item/${itemId}/`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function searchItem({
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(searchDocument);
  return vFetch({
    path: '/API/item/',
    method: 'PUT',
    body,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function updateItemMetadata({
  itemId = isRequired(),
  metadataDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  return updateEntityMetadata({
    entity: 'item',
    entityId: itemId,
    metadataDocument,
    matrixParams,
    queryParams,
    ...props,
  });
}

export function getItemMetadata({
  itemId = isRequired(),
  matrixParams = [],
  queryParams = {},
  ...props
}) {
  return getEntityMetadata({
    entity: 'item',
    entityId: itemId,
    matrixParams,
    queryParams,
    ...props,
  });
}


export function createThumbnail({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/thumbnail`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createTranscode({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/transcode`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createExport({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/export`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createExportImp({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/export/imp`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}
