const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


consign()
.include('api')
.then('routes')
.into(app);


module.exports = app;
