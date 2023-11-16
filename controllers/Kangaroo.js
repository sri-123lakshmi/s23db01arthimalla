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
// for a specific Kangaroo.
exports.Kangaroo_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Kangaroo detail: ' + req.params.id);
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
exports.Kangaroo_view_all_Page = async function(req, res) {
    try{
    theKangaroos = await Kangaroo.find();
    res.render('Kangaroo', { title: 'Kangaroo Search Results', results: theKangaroos });
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
   }
  
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
    exports.Kangaroo_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await Kangaroo.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        }
        exports.Kangaroo_view_one_Page = async function(req, res) {
            console.log("single view for id " + req.query.id)
            try{
            result = await Kangaroo.findById( req.query.id)
            res.render('Kangaroodetail',
            { title: 'Kangaroo Detail', toShow: result });
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
            exports.Kangaroo_create_Page = function(req, res) {
                console.log("create view")
                try{
                res.render('Kangaroocreate', { title: 'Kangaroo Create'});
                }
                catch(err){
                res.status(500)
                res.send(`{'error': '${err}'}`);
                }
                };
                exports.Kangaroo_update_Page = async function(req, res) {
                    console.log("update view for item "+req.query.id)
                    try{
                    let result = await Kangaroo.findById(req.query.id)
                    res.render('Kangarooupdate', { title: 'Kangaroo Update', toShow: result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                   };
                   exports.Kangaroo_delete_Page = async function(req, res) {
                    console.log("Delete view for id " + req.query.id)
                    try{
                    result = await Kangaroo.findById(req.query.id)
                    res.render('Kangaroodelete', { title: 'Kangaroo Delete', toShow:
                    result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                    };
    