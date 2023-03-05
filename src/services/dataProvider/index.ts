import { apis } from '@src/configs';
import simpleRestProvider from 'ra-data-simple-rest';
import { DataProvider } from 'react-admin';
import { CustomDataProvider, customDataProvider } from './customProvider';

const simpleRestDataProvider: DataProvider = simpleRestProvider(
  apis.labapi.url,
);

export const dataProvider: DataProvider & CustomDataProvider = {
  ...simpleRestDataProvider,
  ...customDataProvider,
};
