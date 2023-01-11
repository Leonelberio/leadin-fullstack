const Course = require('../course/coursesModel');
const Chapter = require('./chaptersModel')

const createChapter = async (req, res, next)=>{
    const course = await Course.findById(req.body.cours);
    if(!course) return res.status(400).send({errMessage:'Ce Cours n\'existe pas'})
    //try{
        const lessons = req.files;
        console.log("lessons", lessons);
        const {title,free_preview,cours} = req.body; 
        const saveChapter = new Chapter({
            title:title,
            free_preview:free_preview,
            lessons:lessons,
            cours:cours,
        });
        
     await saveChapter.save()
     .then(result=>{
        console.log(result);
        res.status(201).json({message:"A ete creer avec succes",saveChapter})
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send({errMessage:"Invalide yeeeh"})
    })
}

const getChapters = async(req, res, next)=>{
     
            Chapter.find({cours:req.body.courId}, (err, docs) => {
            if(err){
                res.status(500).send({errMessage:"Desole, donnee introuvable",err})
            }
            else{
                console.log("docs",docs)
                res.status(200).json({message: "good job", data:docs});
                
            }
        });

}

const getChapter = async(req, res, next)=> {
    try{
        const chapter = await Chapter.findById(req.params.id)
        res.status(200).json(chapter)
    }
    catch(err){
        res.status(500).send({errMessage:"Cette donnee n'existe pas"})
    }
}

 const deletChapter = async(res, req, next)=>{
    try{
        const chapter_Id=req.body.chapterId;
        Chapter.findByIdAndRemove({_id:chapter_Id})
        res.status(200).json({message:"Le cours a été supprimer avec success"})
    }
    catch(err)
    {
        res.status(500).send({errMessage:"Could not delete this data"})
    }
}


module.exports = {
    createChapter,
    getChapters,
    getChapter,
    deletChapter,
  };