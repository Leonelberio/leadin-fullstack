const mongoose = require("mongoose");

const { ObjectId } = mongoose;

/* const answerSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
      required: true,
      max: 56,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
); */

const qzSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      max: 512,
    },
    description: {
      type: String,
      required: true,
    },
    answers: {
      type: String,
      required: true
    },
    resolved: {
      type: Boolean,
      default: false,
    },
    /* postedBy: {
      type: ObjectId,
      ref: "User",
    }, */
    courseId: {
      type: ObjectId,
      ref: "Course",
    },
    /* lessonId: {
      type: ObjectId,
      ref: "Lesson",
    }, */
    //answers: [answerSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Qz',qzSchema);

