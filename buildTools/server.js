import express from 'express';
import open from 'open';
import rootReducer from '../src/reducers'
import Main from '../src/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import { fetchMovieDetail } from '../src/actions/index'

var app = express();
const port = 4000;

app.use(express.static('dist'));

app.get('*', (req, res) => {
    const store = createStore(rootReducer)

    const html = renderToString(
        <Provider store={store}>
          <Main />
        </Provider>
    )

    const preloadedState = store.getState();
    res.send(renderFullPage(html, preloadedState))
});

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
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, function (err) {
  if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})