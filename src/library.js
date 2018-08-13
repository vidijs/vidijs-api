import { vFetch } from './utils';

export function listLibrary({
  matrixParams = [],
  ...props
} = {}) {
  const path = '/API/library/';
  return vFetch({
    path,
    matrixParams,
    ...props,
  });
}

export function createLibrary({
  itemListDocument = {},
  queryParams,
  ...props
}) {
  const path = '/API/library';
  const body = JSON.stringify(itemListDocument);
  return vFetch({
    path,
    method: 'POST',
    body,
    queryParams,
    ...props,
  });
}

export function removeLibrary({
  libraryId,
  queryParams,
  ...props
}) {
  const path = `/API/library/${libraryId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function removeLibraryList({
  queryParams,
  ...props
} = {}) {
  const path = '/API/library';
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function getLibrary({
  libraryId,
  matrixParams = [],
  queryParams,
  ...props
}) {
  const path = `/API/library/${libraryId}`;
  return vFetch({
    path,
    matrixParams,
    queryParams,
    ...props,
  });
}

export function updateLibrary({
  libraryId,
  itemListDocument,
  ...props
}) {
  const path = `/API/library/${libraryId}`;
  const body = JSON.stringify(itemListDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function addLibraryItem({
  libraryId,
  itemId,
  ...props
}) {
  const path = `/API/library/${libraryId}/${itemId}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeLibraryItem({
  libraryId,
  itemId,
  ...props
}) {
  const path = `/API/library/${libraryId}/${itemId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function updateLibraryItemMetadata({
  libraryId,
  metadataDocument,
  queryParams,
  ...props
}) {
  const path = `/API/library/${libraryId}/item-metadata`;
  const body = JSON.stringify(metadataDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function getLibrarySettings({
  libraryId,
  ...props
}) {
  const path = `/API/library/${libraryId}/settings`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateLibrarySettings({
  libraryId,
  librarySettingsDocument,
  ...props
}) {
  const path = `/API/library/${libraryId}/settings`;
  const body = JSON.stringify(librarySettingsDocument);
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function getLibraryBatch({
  libraryId,
  queryParams,
  ...props
}) {
  const path = `/API/library/${libraryId}/list`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createLibraryExport({
  libraryId,
  queryParams,
  ...props
}) {
  const path = `/API/library/${libraryId}/export`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}
