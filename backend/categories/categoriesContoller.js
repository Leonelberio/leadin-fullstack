//const ErrorResponse = require('../utils/errorResponse');
//const asyncHandler = require('../middleware/async');
const Categories = require('./categoriesModel');


// @desc      Get all Categories
// @route     GET /api/v1/categories
// @access    Public
exports.getCategories = async (req, res, next) => {
    res.status(200).json(res.advancedResults);
  };
  
  

// @desc      Get single Categories
// @route     GET /api/v1/course/:id
// @access    Public
exports.getCategorie = async (req, res, next) => {
    const categorie = await Categories.findById(req.params.id);
  
    if (!categorie) {
      return res.status(404).send({errMessage: `Course not found with id of ${req.params.id}`})/* next(
        new ErrorResponse(`Course not found with id of ${req.params.id}`, 404)
      ); */
    }
  
    res.status(200).json({ success: true, data: categorie });
  };


// @desc      Create new categories
// @route     POST /api/v1/categories
// @access    Private
exports.createCategories = async (req, res, next) => {
  
    const image = req.file.path; 
    const {name, description} = req.body;
    const categorie = new Categories({
      name:name,
      description: description,
      image: image
    });

    categorie.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({message:"A été creer avec succes",newCategories:result})
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send({errMessage: "Invalide"})
    }) 
  };


// @desc      Update Categories
// @route     PUT /api/v1/Categories/:id
// @access    Private
exports.updateCategories = async (req, res, next) => {
    let categories = await Categories.findById(req.params.id);
  
    if (!categories) {
      return res.status(404).send({errMessage: `categorie not found with id of ${req.params.id}`})/*next(
        new ErrorResponse(`categorie not found with id of ${req.params.id}`, 404)
      );*/
    }
  
    // Make sure user is categories owner
    if (categories.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).send({errMessage: `User ${req.params.id} is not authorized to update this categories`}) /*next(
        new ErrorResponse(
          `User ${req.params.id} is not authorized to update this categories`,
          401
        )
      );*/
    }
  
    categories = await Categories.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    res.status(200).json({message:"Succes", success: true, data: categories });
  };


// @desc      Delete categories
// @route     DELETE /api/v1/categories/:id
// @access    Private
exports.deleteCategories = async (req, res, next) => {
    const categories = await Categories.findById(req.params.id);
  
    if (!categories) {
      return res.status(404).send({errMessage: `categories not found with id of ${req.params.id}`})/*next(
        new ErrorResponse(`categories not found with id of ${req.params.id}`, 404)
      );*/
    }
  
    // Make sure user is categories owner
    if (categories.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).send({errMessage: `User ${req.params.id} is not authorized to delete this categories`})/*next(
        new ErrorResponse(
          `User ${req.params.id} is not authorized to delete this categories`,
          401
        )
      );*/
    }
  
    categories.remove();
  
    res.status(200).json({message: "Remove successfully", success: true, data: {} });
  };