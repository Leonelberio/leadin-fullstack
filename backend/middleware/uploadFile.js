const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getStorage,  } = require('firebase-admin/storage');
const multer = require('multer');


var serviceAccount = require("../keys.json");

if(!getApps().length){
    initializeApp({
        credential: cert(serviceAccount),
        storageBucket: process.env.STORAGE_BUCKET
    });      
}

const handleUploadFile = (filereq, req) => {
    const bucket = getStorage().bucket();
    const nameF = Date.now()+ '.'+filereq.originalname.split('.').pop();
    const filemeta = bucket.file(nameF);
    
    const stream = filemeta.createWriteStream({
        contentType: filereq.mimetype,
    });

    stream.on("error", (e) =>{
        console.log("e", e);
    });

    stream.on("finish", async () => {
       await filemeta.makePublic();
       req.files.path = `https://storage.googleapis.com/${bucket.name}/${nameF}`;
       const  { buffer, ...all} = filereq;
       req.files = [ ...req.files, {...all, path: `https://storage.googleapis.com/${bucket.name}/${nameF}`}]
      
      // next();
    });
    stream.end(filereq.buffer);
}

exports.uploadManyFile = (req, res, next) =>{
    const filess = req.files;
   // console.log("file", filess)
     filess.forEach(element => {
        //console.log('yo',handleUploadFile(element, req))
        handleUploadFile(element, req)
    });
        //console.log('vuhb',element)
        //const filereq =req.file;
       
}

exports.uploadFile = (req, res, next) =>{
    const filereq =req.file;
    if(!filereq) return next();
    console.log('reeeeq', req)
    const bucket = getStorage().bucket();
    const nameF = Date.now()+ '.'+filereq.originalname.split('.').pop();
    const filemeta = bucket.file(nameF);

    const stream = filemeta.createWriteStream({
        contentType: filereq.mimetype,
    });

    stream.on("error", (e) =>{
        console.log("e", e);
    });

    stream.on("finish", async () => {
       await filemeta.makePublic();
       req.file.path = `https://storage.googleapis.com/${bucket.name}/${nameF}`;
       const  { buffer, ...all} = filereq;
       req.files = [{...all, path: `https://storage.googleapis.com/${bucket.name}/${nameF}`}]
      
       next();
    });

    stream.end(filereq.buffer);
    
}

