import { vFetch } from './utils';

export function listCollection({
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  const path = '/API/collection/';
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getCollection({
  collectionId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getCollectionMetadata({
  collectionId,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/metadata`;
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getCollectionAncestor({
  collectionId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/ancestor`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function listCollectionHistory({
  queryParams,
  ...props
} = {}) {
  const path = '/API/collection/history';
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function getCollectionItem({
  collectionId,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/item`;
  return vFetch({
    path,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function searchCollection({
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(searchDocument);
  return vFetch({
    path: '/API/collection/',
    method: 'PUT',
    body,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function searchCollectionItem({
  collectionId,
  searchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(searchDocument);
  const path = `/API/collection/${collectionId}/item`;
  return vFetch({
    path,
    method: 'PUT',
    body,
    queryParams,
    matrixParams,
    ...props,
  });
}

export function createCollection({
  collectionDocument,
  queryParams,
  ...props
}) {
  const path = '/API/collection';
  const body = JSON.stringify(collectionDocument);
  return vFetch({
    path,
    method: 'POST',
    body,
    queryParams,
    ...props,
  });
}

export function removeCollection({
  collectionId,
  ...props
}) {
  const path = `/API/collection/${collectionId}/`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeCollectionList({
  collectionId,
  queryParams,
  ...props
}) {
  const path = '/API/collection';
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function renameCollection({
  collectionId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/rename`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function addCollectionEntity({
  collectionId,
  entityId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/${entityId}`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeCollectionEntity({
  collectionId,
  entityId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/${entityId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function updateCollection({
  collectionId,
  collectionDocument,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/`;
  const body = JSON.stringify(collectionDocument);
  return vFetch({
    path,
    method: 'PUT',
    body,
    queryParams,
    ...props,
  });
}

export function orderCollection({
  collectionId,
  collectionReorderDocument,
  ...props
}) {
  const path = `/API/collection/${collectionId}/order`;
  const body = JSON.stringify(collectionReorderDocument);
  return vFetch({
    path,
    method: 'POST',
    body,
    ...props,
  });
}

export function markFolderCollection({
  collectionId,
  ...props
}) {
  const path = `/API/collection/${collectionId}/map-to-folder`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function unMarkFolderCollection({
  collectionId,
  ...props
}) {
  const path = `/API/collection/${collectionId}/map-to-folder`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateFolderCollection({
  collectionId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/folder-name`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function createCollectionExport({
  collectionId,
  queryParams,
  ...props
}) {
  const path = `/API/collection/${collectionId}/export`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}
