import { AdminContext } from 'react-admin';

import { dataProvider } from './services/dataProvider';
import { AsyncResources } from './components/AsyncResources';

const App = () => {
  return (
    <AdminContext dataProvider={dataProvider}>
      <AsyncResources />
    </AdminContext>
  );
};

export default App;
