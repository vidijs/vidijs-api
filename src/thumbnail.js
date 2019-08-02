import { vFetch, isRequired } from './utils';

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

export function listThumbnailResource({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/thumbnailresource`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function createThumbnailResource({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/thumbnailresource`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function listThumbnail({
  itemId = isRequired(),
  resourceId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/thumbnail/${resourceId}/${itemId}`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function removeAllThumbnail({
  itemId = isRequired(),
  resourceId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/thumbnail/${resourceId}/${itemId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function updateThumbnail({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  ...props
}) {
  const path = `/API/thumbnail/${resourceId}/${itemId}/${time}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function getThumbnail({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/thumbnail/${resourceId}/${itemId}/${time}`;
  const headers = { accept: 'image/png, image/jpeg', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function exportThumbnail({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/thumbnail/${resourceId}/${itemId}/${time}/export`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function removeThumbnail({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  ...props
}) {
  const path = `/API/thumbnail/${resourceId}/${itemId}/${time}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function listPosterResource({
  itemId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/posterresource`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function createPosterResource({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/posterresource`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function listPoster({
  itemId = isRequired(),
  resourceId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/poster/${resourceId}/${itemId}`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function removeAllPoster({
  itemId = isRequired(),
  resourceId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/poster/${resourceId}/${itemId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function updatePoster({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  ...props
}) {
  const path = `/API/poster/${resourceId}/${itemId}/${time}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}

export function getPoster({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/poster/${resourceId}/${itemId}/${time}`;
  const headers = { accept: 'image/png, image/jpeg', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function exportPoster({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/poster/${resourceId}/${itemId}/${time}/export`;
  return vFetch({
    path,
    method: 'GET',
    queryParams,
    ...props,
  });
}

export function removePoster({
  itemId = isRequired(),
  resourceId = isRequired(),
  time = isRequired(),
  ...props
}) {
  const path = `/API/poster/${resourceId}/${itemId}/${time}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
