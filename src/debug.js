import { vFetch } from './utils';

export function echo({
  xmlDocument,
  ...props
}) {
  return vFetch({
    path: '/APInoauth/debug/echo',
    method: 'PUT',
    body: xmlDocument,
    headers: { contentType: 'application/xml' },
    ...props,
  });
}

export default echo;
