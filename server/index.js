import express from 'express';
import open from 'open';
import serverRenderer from './serverRenderer';

var app = express();
const port = 4000;

app.use(express.static('dist'));
app.get('/*', serverRenderer);

app.listen(port, function (err) {
  if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})