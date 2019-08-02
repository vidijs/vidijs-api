import { vFetch, isRequired } from './utils';

export function listMetadataMigration({
  ...props
} = {}) {
  const path = '/API/metadata/migration';
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function getMetadataMigration({
  migrationId = isRequired(),
  ...props
}) {
  const path = `/API/metadata/migration/${migrationId}`;
  return vFetch({
    path,
    method: 'GET',
    ...props,
  });
}

export function createMetadataMigration({
  metadataSchemaMigrationDocument = isRequired(),
  ...props
}) {
  const path = '/API/metadata/migration';
  return vFetch({
    path,
    method: 'POST',
    body: metadataSchemaMigrationDocument,
    ...props,
  });
}
