const express = require('express');
const router= express.Router();
const courseController =require('./courseController');
const Course = require('./coursesModel');
const advancedResults = require('../middleware/advancedResults');
const {ImageMulter } = require('../middleware/multer')

router.post('/create/course',ImageMulter,courseController.uploadCourse);
//router.post('/create/videoUpload/:courseID',VideoMulter,courseController.uploadVideo);
/* router.post('/creater/homepage',Auth.authentication,publisherController.teacherHome);
router.post('/course/delete',Auth.authentication,publisherController.deleteCourse);
router.post('/course/edit',Auth.authentication,publisherController.editCourse); */
//router.put('/course/Update',imageMulter,publisherController.updateCourse)
router.post('/watchedByuser',courseController.watchedByUsers)
router.route('/get/courses').get(advancedResults(Course),courseController.getCourses)
router.route('/get/course/:id').get(advancedResults(Course),courseController.getCourse)
router.post('/search', courseController.searchCourse)

module.exports = router;
