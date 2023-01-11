const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Ajouter le titre du cours']
      },
      description: {
        type: String,
        required: [true, 'Ajouter une description du cours']
     },
      imageurl:{
          type:String,
          require:true,
      },
      author:{
        type:String,
        require: true,
      },
      cat:{
          type: ObjectId,
          required:true,
          ref:'Categories'
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
    },

);

module.exports = mongoose.model('Course',courseSchema);