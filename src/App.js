import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Containers/Categories';
import AppRouter from './Config/router';
import { Provider } from 'react-redux'
import store from './store';

function App() {  
  return (
    <Provider store={store}>
    <AppRouter>
    <div className="App bg-dark">
            <Categories />
    </div>
    </AppRouter>
    </Provider>
  );
}

export default App;