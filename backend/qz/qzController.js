const Qz = require("./qzModel")

const getQzs = async (req, res, next) => {
    res.status(200).json(res.advancedResults);
};
  
const getQz = async (req, res, next) => {
  
    try{
        const qz = await Qz.findById(req.params.id)
        res.json(qz)
    }
    catch(err){
        res.status(500).send({errMessage:"Cette donnee n'existe pas"})
    }

};

const createQz = async (req, res, next) => {
  
    const {title, description, answers, resolved, courseId} = req.body;
    const qz = new Qz({
      title:title,
      description: description,
      answers: answers,
      resolved: resolved,
      courseId: courseId,
    });

    qz.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({message:"A été creer avec succes",newQz:result})
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send({errMessage: "Invalide"})
    }) 
  };

module.exports ={
    getQz,
    getQzs,
    createQz
}