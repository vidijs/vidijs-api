import { vFetch, isRequired } from './utils';

export function listComponent({
  itemId = isRequired(),
  shapeId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getComponent({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function removeComponent({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}`;
  return vFetch({
    path,
    method: 'DELETE',
    queryParams,
    ...props,
  });
}

export function createComponent({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function createComponentPlaceholder({
  itemId = isRequired(),
  shapeId = isRequired(),
  queryParams = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/placeholder`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function moveComponent({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  targetItemId = isRequired(),
  targetShapeId = isRequired(),
  targetComponentId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}/move/item/${targetItemId}/shape/${targetShapeId}/component/${targetComponentId}`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function moveComponentToShape({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  targetItemId = isRequired(),
  targetShapeId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}/move/item/${targetItemId}/shape/${targetShapeId}`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function copyComponent({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  targetItemId = isRequired(),
  targetShapeId = isRequired(),
  targetComponentId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}/copy/item/${targetItemId}/shape/${targetShapeId}/component/${targetComponentId}`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function copyComponentToShape({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  targetItemId = isRequired(),
  targetShapeId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}/copy/item/${targetItemId}/shape/${targetShapeId}`;
  return vFetch({
    path,
    method: 'POST',
    queryParams,
    ...props,
  });
}

export function addComponentFile({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  fileId = isRequired(),
  queryParams,
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}/file/${fileId}`;
  return vFetch({
    path,
    method: 'PUT',
    queryParams,
    ...props,
  });
}

export function removeComponentFile({
  itemId = isRequired(),
  shapeId = isRequired(),
  componentId = isRequired(),
  fileId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/shape/${shapeId}/component/${componentId}/file/${fileId}`;
  return vFetch({
    path,
    method: 'PUT',
    ...props,
  });
}
