import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import ExamIcon from '@material-ui/icons/Book';

import { ExamList } from './components/Exams/ExamList';
import { ExamCreateForm } from './components/Exams/ExamCreateForm';
import { ExamEditForm } from './components/Exams/ExamEditForm';
import { ExamDetails } from './components/Exams/ExamDetails';

const dataProvider = simpleRestProvider('http://localhost:3333');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="exams"
        list={ExamList}
        create={ExamCreateForm}
        edit={ExamEditForm}
        show={ExamDetails}
        icon={ExamIcon}
        options={{ label: 'Exames' }}
      />
    </Admin>
  );
};

export default App;
