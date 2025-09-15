const express = require('express');
const app = express();
const {getHome} = require('./controller/route');


app.get('/', getHome);


