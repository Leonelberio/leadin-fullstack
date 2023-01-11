const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a Category title']
  },
  description: {
    type: String,
    required: [true, 'Please add a Category description']
  },
  image:{
    type: String,
    require: [true, "Please add a pic"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Categories', CatSchema);
