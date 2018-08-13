import { vFetch } from './utils';

export function createLicense({
  username,
  password,
  file,
  ...props
}) {
  const headers = { accept: 'text/html' };
  headers.delete('content-type');
  const path = '/UploadLicense/getlic';
  const formData = new FormData();
  formData.append('user', username);
  formData.append('pass', password);
  formData.append('file', file);
  return vFetch({
    path,
    body: formData,
    method: 'POST',
    headers,
    ...props,
  });
}

export default createLicense;
