const router = require('express').Router({ mergeParams: true });
const {
  getCategories,
  getCategorie,
  createCategories,
  updateCategories,
  deleteCategories
} = require('./categoriesContoller');
const Categories = require('./categoriesModel');
const {ImageMulter} = require('../middleware/multer')
const advancedResults = require('../middleware/advancedResults');
//const { protect, authorize } = require('../middleware/auth');

//const router = express.Router({ mergeParams: true });


router
  .route('/')
  .get(
    advancedResults(Categories),
    getCategories)
  .post(ImageMulter, createCategories);
  //router.post('/create-cat',ImageMulter,createCategories);

router
  .route('/:id')
  .get(getCategorie)
  .put(updateCategories)
  .delete(deleteCategories);

module.exports = router;
