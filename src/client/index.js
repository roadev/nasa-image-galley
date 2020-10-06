import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
// import { ThemeProvider } from '@material-ui/core/styles';
import { Router } from 'react-router';
import reducers from './redux/reducers';
import App from './routes';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

function Main() {
  // useEffect(() => {
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        {/* <ThemeProvider> */}
        <App />
        {/* </ThemeProvider> */}
      </Router>
    </Provider>
  );

}

ReactDOM.hydrate(
  <Main />,
  document.getElementById('app'),
);
