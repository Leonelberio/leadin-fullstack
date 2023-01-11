const multer = require('multer');


const baseFileLink = 'C:/Users/User/Desktop/Project/leadin/backnd/App'

const ImagefileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'./images');
    },
    filename: (req,file,cb)=>{
      cb(null, file.originalname)
    }
  })
  
const ImagefileFilter=(req,file,cb)=>{
    if(file.mimetype ==="image/png" || file.mimetype==="image/jpg" || file.mimetype==="image/jpeg" || file.mimetype==="image/webp"){
      cb(null,true);
    }
    else {cb(null,false);
          console.log("wrong file type")}
  }
    
const VideofileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,`${baseFileLink}/videos`);
    },
    filename: (req,file,cb)=>{
      const currentDate= new Date();
      cb(null, currentDate.toDateString() +'-' + file.originalname)
    }
  })
  
const VideofileFilter=(req,file,cb)=>{
    if(file.mimetype ==="video/mp4"){
      cb(null,true);
    }
    else {cb(null,false);
      console.log("wrong file type")}
}

const up = multer.memoryStorage()

const ImageMulter = multer({storage:ImagefileStorage,fileFilter:ImagefileFilter}).single('image')
const VideoMulter = multer({storage:VideofileStorage,fileFilter:VideofileFilter}).any()
const ALLMulter = multer({storage:up,fileFilter:VideofileFilter}).any()

 module.exports = {ImageMulter, VideoMulter, ALLMulter};
