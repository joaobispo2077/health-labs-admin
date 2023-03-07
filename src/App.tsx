import { AdminContext } from 'react-admin';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { dataProvider } from './services/dataProvider';
import { AsyncResources } from './components/AsyncResources';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AdminContext dataProvider={dataProvider}>
        <AsyncResources />
      </AdminContext>
    </ThemeProvider>
  );
};

export default App;
