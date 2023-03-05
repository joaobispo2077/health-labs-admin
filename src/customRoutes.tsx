import { Route } from 'react-router-dom';
import ApiTest from './pages/ApiTest';

export const customRoutes = [
  <Route exact path="/api-test" component={ApiTest} />,
];
