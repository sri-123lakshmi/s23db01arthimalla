var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Kangaroo', { title: 'Search Results Kangaroo' });
});
var express = require('express');
const Kangaroo_controlers= require('../controllers/Kangaroo');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET Kangaroos */
router.get('/', Kangaroo_controlers.Kangaroo_view_all_Page );

/* GET detail Kangaroo page */
router.get('/detail', Kangaroo_controlers.Kangaroo_view_one_Page);
/* GET create Kangaroo page */
router.get('/create', Kangaroo_controlers.Kangaroo_create_Page);
/* GET create update page */
router.get('/update',secured,  Kangaroo_controlers.Kangaroo_update_Page);
/* GET delete Kangaroo page */
router.get('/delete', Kangaroo_controlers.Kangaroo_delete_Page);
module.exports = router;


module.exports = router;
