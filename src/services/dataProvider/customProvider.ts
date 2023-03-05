import { apis } from '@src/configs';
import { fetchUtils } from 'react-admin';

export type CustomDataProvider = {
  request: (url: string, options: Record<string, unknown>) => Promise<any>;
  customPost: (
    resource: string,
    options: Record<string, unknown> & { body: Record<string, unknown> },
  ) => Promise<any>;
};

const httpClient = fetchUtils.fetchJson;

const request = (url: string, options = {}) => {
  return httpClient(url, { ...options });
};

const customPost = async (
  resource: string,
  options: Record<string, unknown> = {},
) => {
  console.log('customPost', options);
  const { json } = await httpClient(`${apis.labapi.url}/${resource}`, {
    ...options,
    body: JSON.stringify(options.body || {}),
    method: 'POST',
  });
  return json;
};

export const customDataProvider: CustomDataProvider = {
  request,
  customPost,
};
