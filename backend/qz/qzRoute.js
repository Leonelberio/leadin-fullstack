const router = require('express').Router({ mergeParams: true });
const {getQzs,
       getQz, 
       createQz} =require('./qzController');
const Qz = require('./qzModel');
const advancedResults = require('../middleware/advancedResults'); 

router.post('/create/qz', createQz);

//router.route('/', getQzs);
router
  .route('/')
  .get(
    advancedResults(Qz),
    getQzs);
router.route('/getqz/:id',getQz)

module.exports = router;
