var Kangaroo = require('../models/Kangaroo');
// List of all Kangaroos
exports.Kangaroo_list = async function(req, res) {
    try{
        theKangaroos = await Kangaroo.find();
        res.send(theKangaroos);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }        
};

// Handle Kangaroo create on POST.
exports.Kangaroo_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Kangaroo create POST');
};
// Handle Kangaroo delete form on DELETE.
exports.Kangaroo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Kangaroo delete DELETE ' + req.params.id);
};
// Handle Kangaroo update form on PUT.
exports.Kangaroo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Kangaroo update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.Kangaroo_view_all_Page = async function(req, res) {
    try{
    theKangaroo = await Kangaroo.find();
    res.render('Kangaroo', { title: 'Kangaroo Search Results', results: theKangaroo });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    exports.Kangaroo_create_post = async function(req, res) {
        console.log(req.body)
        let document = new Kangaroo();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"Kangaroo_type":"goat", "cost":12, "size":"large"}
        document.Kangaroo_color = req.body.Kangaroo_color;
        document.Kangaroo_breed = req.body.Kangaroo_breed;
        document.Kangaroo_price = req.body.Kangaroo_price;
        try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
// for a specific Kangaroo.
exports.Kangaroo_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Kangaroo.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
