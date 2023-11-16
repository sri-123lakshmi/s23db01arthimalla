var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Kangaroo_controller = require('../controllers/Kangaroo');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Kangaroo ROUTES ///
// POST request for creating a Kangaroo.
router.post('/Kangaroos', Kangaroo_controller.Kangaroo_create_post);
// DELETE request to delete Kangaroo.
router.delete('/Kangaroos/:id', Kangaroo_controller.Kangaroo_delete);
// PUT request to update Kangaroo.
router.put('/Kangaroos/:id', Kangaroo_controller.Kangaroo_update_put);
// GET request for one Kangaroo.
router.get('/Kangaroos/:id', Kangaroo_controller.Kangaroo_detail);
// GET request for list of all Kangaroo items.
router.get('/Kangaroos', Kangaroo_controller.Kangaroo_list);
module.exports = router;
// Handle Kangaroo upda