import express from 'express';
import open from 'open';
import serverRenderer from './serverRenderer';

var app = express();
const port = 4000;

app.use(express.static('dist'));
app.get('/*', serverRenderer);

app.listen(port, () => {
    open('http://localhost:' + port);
})