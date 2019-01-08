import express from 'express';
import open from 'open';

var app = express();
const port = 4000;

app.use(express.static('dist'));

app.listen(port, function (err) {
  if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})