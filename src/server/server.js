/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../client/routes/serverRoutes';
import reducer from '../client/redux/reducers';
// import initialState from '../client/initialState';
import getManifest from './getManifest';
import theme from '../theme';

dotenv.config();

const { PORT, ENV } = process.env;

const app = express();

if (ENV === 'dev') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    }

    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, css, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/main.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/main.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (
    `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="${mainStyles}" type="text/css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <style id="jss-server-side">${css}</style>
          <title>NASA Image Gallery</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="${vendorBuild}" type="text/javascript"></script>
          <script src="${mainBuild}" type="text/javascript"></script>
        </body>
      </html>
    `
  );
};

const renderApp = (req, res) => {
  const store = createStore(reducer, {});
  const preloadedState = store.getState();
  const sheets = new ServerStyleSheets();

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>

        {sheets.collect(
          <ThemeProvider theme={theme}>
            {renderRoutes(serverRoutes)}
          </ThemeProvider>,
        )}

      </StaticRouter>
    </Provider>,
  );

  const css = sheets.toString();

  res.send(setResponse(html, css, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) {
    console.error(error);
  } else {
    console.log(`server running on port ${PORT}`);
  }
});
