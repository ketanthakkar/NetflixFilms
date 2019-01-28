import React from 'react';
import { renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import express from 'express';
import routes from '../src/routes';
import configureStore from '../src/configureStore';
import Main from '../src/Main';

const router = express.Router();

function renderFullPage(html, preloadedState) {
	return `
		<!doctype html>
		<html>
			<head>
			<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
            <title>ReactJS App</title>
			</head>
			<body>
            <div id="root">${html}</div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
			<script src="/bundle.js"></script>
			</body>
		</html>
	`;
}

router.get('/*', function(req, res, next) {
  const store = configureStore();

  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match }) => {
      
    const { fetchData } = route.component;
    
    if (!(fetchData instanceof Function)) {
      return Promise.resolve(null);
    }

    return fetchData(store.dispatch, match);
  });

  return Promise.all(promises)
    .then(() => {
      const context = {};
      const app = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={context} >
                <Main />
            </StaticRouter>
        </Provider>
      );

      const html = renderToString(app);

      if (context.url) {
        return res.redirect(context.url);
      }

      const preloadedState = store.getState();
      return res.send(renderFullPage(html, preloadedState));
    });
});

module.exports = router;