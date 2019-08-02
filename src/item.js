import { vFetch, isRequired } from './utils';
import { updateEntityMetadata, getEntityMetadata } from './metadata';
import {
  listEntityMetadataLock,
  createEntityMetadataLock,
  getEntityMetadataLock,
  updateEntityMetadataLock,
  removeEntityMetadataLock,
} from './metadatalock';

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
}) {
  const path = `/API/item/${itemId}/`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    matrixParams,
    ...props,
  });
}

export function getItemUri({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/uri`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function removeItem({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function removeItemList({
  queryParams,
  ...props
} = {}) {
  const path = '/API/item/';
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function searchItem({
  itemSearchDocument = {},
  matrixParams = [],
  queryParams,
  ...props
} = {}) {
  const body = JSON.stringify(itemSearchDocument);
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

export function listItemRelation({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/relation`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function createItemRelation({
  itemId = isRequired(),
  relationItemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/relation/${relationItemId}`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function removeItemRelation({
  itemId = isRequired(),
  relationItemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/relation/${relationItemId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function removeAllItemRelation({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/relation/`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function createRelation({
  itemRelationListDocument = isRequired(),
  queryParams,
  ...props
}) {
  const path = '/API/relation';
  const body = JSON.stringify(itemRelationListDocument);
  return vFetch({
    path,
    method: 'POST',
    body,
    queryParams,
    ...props,
  });
}

export function getRelation({
  relationId = isRequired(),
  ...props
}) {
  const path = `/API/relation/${relationId}/`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateRelation({
  relationId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/relation/${relationId}/`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeRelation({
  relationId = isRequired(),
  ...props
}) {
  const path = `/API/relation/${relationId}/`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getItemSearchHistory({
  queryParams,
  ...props
} = {}) {
  const path = '/item/history';
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function reindexItem({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/re-index`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function createItemList({
  ...props
} = {}) {
  const path = '/API/item/list';
  return vFetch({
    path,
    method: 'POST',
    ...props,
  });
}

export function listItemCollection({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/collections`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function listItemLibrary({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/library`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}


export function createItemLock({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/lock`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function getItemLock({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/lock`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function removeItemLock({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/lock`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function updateItemLock({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/lock`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function listItemMetadataLock({
  itemId = isRequired(),
  ...props
}) {
  return listEntityMetadataLock({
    entity: 'item',
    entityId: itemId,
    ...props,
  });
}

export function createItemMetadataLock({
  itemId = isRequired(),
  ...props
}) {
  return createEntityMetadataLock({
    entity: 'item',
    entityId: itemId,
    ...props,
  });
}

export function getItemMetadataLock({
  itemId = isRequired(),
  ...props
}) {
  return getEntityMetadataLock({
    entity: 'item',
    entityId: itemId,
    ...props,
  });
}

export function updateItemMetadataLock({
  itemId = isRequired(),
  ...props
}) {
  return updateEntityMetadataLock({
    entity: 'item',
    entityId: itemId,
    ...props,
  });
}
export function removeItemMetadataLock({
  itemId = isRequired(),
  ...props
}) {
  return removeEntityMetadataLock({
    entity: 'item',
    entityId: itemId,
    ...props,
  });
}

export function getItemLoudness({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/loudness`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getItemWaveformValue({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/waveform/value`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function getItemWaveformImage({
  itemId = isRequired(),
  headers: propsHeaders = {},
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/waveform/image`;
  const headers = { accept: 'image/png', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    queryParams,
    ...props,
  });
}

export function getItemWaveformImageUri({
  itemId = isRequired(),
  headers: propsHeaders = {},
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/waveform/imageURI`;
  const headers = { accept: 'text/plain', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    queryParams,
    ...props,
  });
}
