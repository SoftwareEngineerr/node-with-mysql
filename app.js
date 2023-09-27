const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes/router')
const port = 4000;

app.use(express.json());
app.use(cors())

app.use('/' , router);

app.listen(port)