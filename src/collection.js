import { vFetch, isRequired } from './utils';

import * as metadataApi from './metadata';
import {
  listEntityMetadataLock,
  createEntityMetadataLock,
  getEntityMetadataLock,
  updateEntityMetadataLock,
  removeEntityMetadataLock,
} from './metadatalock';

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

export function updateCollectionMetadata({
  collectionId,
  metadataDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  return metadataApi.updateEntityMetadata({
    entity: 'collection',
    entityId: collectionId,
    metadataDocument,
    matrixParams,
    queryParams,
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
  itemSearchDocument,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const body = JSON.stringify(itemSearchDocument);
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

export function listCollectionMetadataLock({
  collectionId = isRequired(),
  ...props
}) {
  return listEntityMetadataLock({
    entity: 'collection',
    entityId: collectionId,
    ...props,
  });
}

export function createCollectionMetadataLock({
  collectionId = isRequired(),
  ...props
}) {
  return createEntityMetadataLock({
    entity: 'collection',
    entityId: collectionId,
    ...props,
  });
}

export function getCollectionMetadataLock({
  collectionId = isRequired(),
  ...props
}) {
  return getEntityMetadataLock({
    entity: 'collection',
    entityId: collectionId,
    ...props,
  });
}

export function updateCollectionMetadataLock({
  collectionId = isRequired(),
  ...props
}) {
  return updateEntityMetadataLock({
    entity: 'collection',
    entityId: collectionId,
    ...props,
  });
}
export function removeCollectionMetadataLock({
  collectionId = isRequired(),
  ...props
}) {
  return removeEntityMetadataLock({
    entity: 'collection',
    entityId: collectionId,
    ...props,
  });
}
