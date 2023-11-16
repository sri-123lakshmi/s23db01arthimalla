var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Kangaroo', { title: 'Search Results Kangaroo' });
});
var express = require('express');
const Kangaroo_controlers= require('../controllers/Kangaroo');
var router = express.Router();
/* GET Kangaroos */
router.get('/', Kangaroo_controlers.Kangaroo_view_all_Page );

/* GET detail Kangaroo page */
router.get('/detail', Kangaroo_controlers.Kangaroo_view_one_Page);
/* GET create Kangaroo page */
router.get('/create', Kangaroo_controlers.Kangaroo_create_Page);
module.exports = router;
