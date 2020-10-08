import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'babel-polyfill';
import Home from '../views/Home';
// import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
