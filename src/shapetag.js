import { vFetch } from './utils';

export function listShapeTag({
  ...props
} = {}) {
  const path = '/API/shape-tag/';
  return vFetch({
    path,
    ...props,
  });
}

export function getShapeTag({
  tagName,
  ...props
}) {
  const path = `/API/shape-tag/${tagName}/`;
  return vFetch({
    path,
    ...props,
  });
}

export function updateShapeTag({
  tagName,
  transcodePresetDocument,
  ...props
}) {
  const body = JSON.stringify(transcodePresetDocument);
  const path = `/API/shape-tag/${tagName}`;
  return vFetch({
    path,
    body,
    method: 'PUT',
    ...props,
  });
}

export function removeShapeTag({
  tagName,
  ...props
}) {
  const path = `/API/shape-tag/${tagName}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getShapeTagScript({
  tagName,
  ...props
}) {
  const headers = { accept: 'application/javascript' };
  const path = `/API/shape-tag/${tagName}/script`;
  return vFetch({
    path,
    headers,
    ...props,
  });
}

export function updateShapeTagScript({
  tagName,
  shapeTagScript,
  ...props
}) {
  const headers = { contentType: 'application/javascript' };
  const path = `/API/shape-tag/${tagName}/script`;
  return vFetch({
    path,
    body: shapeTagScript,
    method: 'PUT',
    headers,
    ...props,
  });
}

export function removeShapeTagScript({
  tagName,
  ...props
}) {
  const path = `/API/shape-tag/${tagName}/script`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function testShapeTagScript({
  tagName,
  itemId,
  shapeId,
  queryParams,
  ...props
}) {
  const path = `/API/shape-tag/${tagName}/item/${itemId}/shape/${shapeId}/`;
  return vFetch({
    path,
    queryParams,
    ...props,
  });
}

export function createShapeTagPreset({
  ...props
} = {}) {
  const path = '/APIinit/preset-templates';
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}
