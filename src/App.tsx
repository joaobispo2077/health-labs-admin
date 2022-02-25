import { Admin, ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { useTheme } from './hooks/useTheme';
const dataProvider = simpleRestProvider('http://localhost:3333');

const App = () => {
  const { selectedTheme } = useTheme();

  return (
    <Admin theme={selectedTheme} dataProvider={dataProvider}>
      {/* <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
      <Resource name="todos" list={ListGuesser} />
      <Resource name="photos" list={ListGuesser} options={{ label: 'Fotos' }} /> */}
      <Resource name="exams" list={ListGuesser} options={{ label: 'Exames' }} />
      {/* <Resource name="laboratories" list={LaboratoryList} /> */}
    </Admin>
  );
};

export default App;
