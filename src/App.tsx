import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { useTheme } from './hooks/useTheme';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  const { selectedTheme } = useTheme();

  return (
    <Admin theme={selectedTheme} dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
      <Resource name="photos" list={ListGuesser} options={{ label: 'Fotos' }} />
      <Resource name="todos" list={ListGuesser} />
      {/* <Resource name="laboratories" list={LaboratoryList} /> */}
    </Admin>
  );
};

export default App;
