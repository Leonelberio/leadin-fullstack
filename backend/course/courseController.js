const Course = require('./coursesModel');
//const asyncHandler = require('../middleware/async');
const Categories = require('../categories/categoriesModel');


const uploadCourse = async (req, res, next)=>{
    const categorie = await Categories.findById(req.body.cat);
    if(!categorie) return res.status(400).send({errMessage:'Invalid category'})
    const imageurl = req.file.path; 
    const {name,description,author,cat} = req.body; 
    
    // const userId=req.body._id;

       const course = new Course({
        imageurl:imageurl,
        name:name,
        description:description,
        author:author,
        cat:cat
    });
    course.save()
    .then(result => {
        console.log(result);
        res.status(201).json({message:"A été creer avec succes",newCourse:result})
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({errMessage: "Invalide"})
    })   

}


const getCourses = async (req, res, next) => {
    res.status(200).json(res.advancedResults);
  };

const getCourse = async (req, res, next) => {
  
    try{
        const cours = await Course.findById(req.params.id)
        res.json(cours)
    }
    catch(err){
        res.status(500).send({errMessage:"Cette donnee n'existe pas"})
    }

  };

const searchCourse = async (req, res, next) =>{
    const {name}  = req.body;
    try{
        if(name){
            let search = await Course.find({name: {$regex: new RegExp('^'+name+'.*','i')}}).exec();
            search = search.slice(0, 10);
            res.status(200).json({ data: search });
            return;
        }

        res.status(400).json({code: 400, errMessage: `bad request, name is ${name}`, error: req.body });
    }
    catch(err){
        res.status(500).json({code: 500, message: 'Invalide'});
    }
  }


const watchedByUsers = (req,res,next)=>{
    const userId=req.body.userId;
    const videoId=req.body.videoId;
    const courseId=req.body.courseId;
    console.log(videoId);
    Course.findById({_id:courseId})
    .then(course=>{
        course.videoContent.every(video=>{
            console.log(video)
            if(video._id == videoId){
                if(!video.usersWatched.includes(userId)){
                    video.usersWatched.push(userId);
                }
               // console.log("matched found")
                return false;
            }
            return true;
           // console.log("ran")
        })
        course.save();
        console.log(course.videoContent)
        res.status(200).json({message:"ko"})
    })
    .catch(err=>{
        console.log(err)
    })
}

const deleteCourse=(req,res,next)=>{
    const courseId=req.body.courseId;

    Course.findByIdAndRemove({_id:courseId})
    .then(course=>{
        res.status(200).json({message:"Le cours a été supprimer avec success"})
    })
    .catch(err=>{
        console.log(err)
    })
}

// editing course
const editCourse = (req,res,next)=>{
    const courseId  = req.body.courseId;

    Course.findOne({_id:courseId})
    .then(course=>{
        res.status(200).json({course})
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports = {
    searchCourse,
    deleteCourse,
    editCourse,
    getCourses,
    uploadCourse,
    watchedByUsers,
    getCourse

}