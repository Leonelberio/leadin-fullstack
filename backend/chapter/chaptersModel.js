const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const chapterSchema = new mongoose.Schema({
      title:{
        type: String,
       //required: [false, 'Ajouter le titre du cours']
        required: false
      },
      lessons:{
          type:[Object],
          require:false,
      },
      free_preview: {
        type: Boolean,
        default: false,
      },
      cours:{
        type: ObjectId,
        required:false,
        ref:'Course'
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
    },

);

module.exports = mongoose.model('Chapter',chapterSchema);