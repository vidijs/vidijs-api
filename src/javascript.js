import { vFetch } from './utils';

export function test({
  javascriptDocument,
  ...props
}) {
  const headers = { contentType: 'application/javascript' };
  const path = '/API/javascript/test';
  return vFetch({
    path,
    body: javascriptDocument,
    method: 'POST',
    headers,
    ...props,
  });
}

export default test;
