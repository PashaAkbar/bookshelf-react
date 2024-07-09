import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './router/AppRouter';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
