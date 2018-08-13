import { vFetch } from './utils';

export function getVersion({
  ...props
} = {}) {
  const path = '/API/version';
  return vFetch({
    path,
    ...props,
  });
}

export default getVersion;
