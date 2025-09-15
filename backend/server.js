const express = require('express');
const app = express();
const {projectModel} = require('./model/projectModel');
const mongoose = require('mongoose');
const {getService, postService, postEditService} = require('./controller/route');
require('dotenv').config();

// Middleware
app.use(express.json());


// Routes
app.get('/', getService);
app.post('/add-service', postService);
app.post('/edit-service', postEditService);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Database Connected'))
.catch(err => console.log('Error while connecting database: '+ err));


const PORT = 80 || 3000;
app.listen(PORT, () => console.log("Server online At: http://localhost:" + PORT));