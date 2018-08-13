import { vFetch } from './utils';

export function createLicense({
  file,
  ...props
}) {
  const headers = { contentType: 'application/octet-stream' };
  const path = '/API/license';
  return vFetch({
    path,
    body: file,
    method: 'POST',
    headers,
    ...props,
  });
}

export default createLicense;
