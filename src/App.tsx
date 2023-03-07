import { AdminContext } from 'react-admin';
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { dataProvider } from './services/dataProvider';
import { AsyncResources } from './components/AsyncResources';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme();

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AdminContext dataProvider={dataProvider}>
          <AsyncResources />
        </AdminContext>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
