const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  price: {
    type: String
  }
})


const projectModel = mongoose.model('Project', mongoSchema);
module.exports = projectModel;