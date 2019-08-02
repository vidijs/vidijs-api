import { vFetch, isRequired } from './utils';

export function getTimeline({
  itemId = isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/item/${itemId}/timeline`;
  const headers = { accept: 'text/plain', ...propsHeaders };
  return vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  });
}

export function removeTimeline({
  itemId = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/timeline`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getTimelineFormat({
  itemId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/timeline/${format}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function updateTimelineFormat({
  itemId = isRequired(),
  format = isRequired(),
  body = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/timeline/${format}`;
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removeTimelineFormat({
  itemId = isRequired(),
  format = isRequired(),
  ...props
}) {
  const path = `/API/item/${itemId}/timeline/${format}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}
