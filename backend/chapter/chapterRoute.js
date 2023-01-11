const express = require('express');
const multer = require('multer');
const router = express.Router();


const {getChapters, createChapter, getChapter} = require('./chapterContoller');

const { uploadFile, uploadManyFile } = require('../middleware/uploadFile');

const Multer = multer({
    storage: multer.memoryStorage(),
})

router.post('/create/lesson', Multer.single("videos"), uploadFile , createChapter);
router.post('/bycours', getChapters);
router.get('/detail/:id', getChapter);



module.exports = router;