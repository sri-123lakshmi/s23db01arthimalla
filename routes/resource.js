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
// Handle Kangaroo update form on PUT.
exports.Kangaroo_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Kangaroo.findById( req.params.id)
// Do updates of properties
if(req.body.Kangaroo_color)
toUpdate.Kangaroo_color = req.body.Kangaroo_color;
if(req.body.Kangaroo_breed) toUpdate.Kangaroo_breed = req.body.Kangaroo_breed;
if(req.body.Kangaroo_price) toUpdate.Kangaroo_price = req.body.Kangaroo_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};