import { vFetch } from './utils';

export function getConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/';
  return vFetch({
    path,
    ...props,
  });
}

export function getPropertiesConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/properties';
  return vFetch({
    path,
    ...props,
  });
}

export function updatePropertiesConfiguration({
  configurationPropertyDocument,
  ...props
}) {
  const body = JSON.stringify(configurationPropertyDocument);
  const path = '/API/configuration/properties/';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removePropertiesConfiguration({
  key,
  ...props
}) {
  const path = `/API/configuration/properties/${key}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}


export function getIndexingConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/indexing';
  return vFetch({
    path,
    ...props,
  });
}

export function updateIndexingConfiguration({
  indexingConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(indexingConfigurationDocument);
  const path = '/API/configuration/indexing';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function getFtpPoolConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/ftp-pool';
  return vFetch({
    path,
    ...props,
  });
}

export function updateFtpPoolConfiguration({
  ftpPoolConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(ftpPoolConfigurationDocument);
  const path = '/API/configuration/ftp-pool';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removeFtpPoolConfiguration({
  ...props
}) {
  const path = '/API/configuration/ftp-pool';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getJobPoolConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/job-pool';
  return vFetch({
    path,
    ...props,
  });
}

export function updateJobPoolConfiguration({
  jobPoolListDocument,
  ...props
}) {
  const body = JSON.stringify(jobPoolListDocument);
  const path = '/API/configuration/job-pool';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removeAllJobPoolConfiguration({
  ...props
}) {
  const path = '/API/configuration/job-pool';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function removeJobPoolConfiguration({
  jobPoolPriority,
  ...props
}) {
  const path = `/API/configuration/job-pool/${jobPoolPriority}`;
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getMetricsConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/metrics';
  return vFetch({
    path,
    ...props,
  });
}

export function updateMetricsConfiguration({
  metricsConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(metricsConfigurationDocument);
  const path = '/API/configuration/metrics';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function getPathAliasConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/path-alias';
  return vFetch({
    path,
    ...props,
  });
}

export function updatePathAliasConfiguration({
  pathAliasConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(pathAliasConfigurationDocument);
  const path = '/API/configuration/path-alias';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function getLogReportConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/logreport';
  return vFetch({
    path,
    ...props,
  });
}

export function updateLogReportConfiguration({
  logReportConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(logReportConfigurationDocument);
  const path = '/API/configuration/logreport';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function getDatabasePurgingConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/purging';
  return vFetch({
    path,
    ...props,
  });
}

export function updateDatabasePurgingConfiguration({
  databasePurgingConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(databasePurgingConfigurationDocument);
  const path = '/API/configuration/purging';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}

export function removeDatabasePurgingConfiguration({
  ...props
}) {
  const path = '/API/configuration/purging';
  return vFetch({
    path,
    method: 'DELETE',
    ...props,
  });
}

export function getCorsConfiguration({
  ...props
} = {}) {
  const path = '/API/configuration/cors';
  return vFetch({
    path,
    ...props,
  });
}

export function updateCorsConfiguration({
  corsConfigurationDocument,
  ...props
}) {
  const body = JSON.stringify(corsConfigurationDocument);
  const path = '/API/configuration/cors';
  return vFetch({
    path,
    method: 'PUT',
    body,
    ...props,
  });
}
