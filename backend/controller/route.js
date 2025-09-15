const express = require('express');
const app = express();
const projectModel = require('../model/projectModel');

const getService = (req, res) =>{
  res.send("<h1>Welcome To Our IT Services</h1>");
  res.end();
};

const postService = async (req, res) => {
    const {serviceName, type, price} = req.body;
    const addService = new projectModel({serviceName, type, price});
    await addService.save()
    .then(res.send("<h2> Data Saved Succesfully</h2>"))
    .catch(err => console.log("Error while saving data: " + err));
};

const postEditService =  (req, res) => {
    const {serviceName} = req.body;
     console.log(projectModel.find());
    projectModel.findOne(service => {
      if(!service.serviceName == serviceName){
        console.log("No service found");
        res.redirect("/");
      }
      console.log("Service found");
})

}

module.exports = {getService, postService, postEditService};