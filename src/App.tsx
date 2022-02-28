import { Admin, Resource, } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { useTheme } from './hooks/useTheme';
import { ExamList } from './components/Exams/ExamList';
const dataProvider = simpleRestProvider('http://localhost:3333');



const App = () => {
  const { selectedTheme } = useTheme();

  return (
    <Admin theme={selectedTheme} dataProvider={dataProvider}>
      <Resource name="exams" list={ExamList} options={{ label: 'Exames' }} />
    </Admin>
  );
};

export default App;
