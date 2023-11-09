const mongoose = require("mongoose")
const KangarooSchema = mongoose.Schema({
    Kangaroo_color:(String),
    Kangaroo_breed:(String) ,
    Kangaroo_price:(Number)
})
module.exports = mongoose.model("Kangaroo",KangarooSchema)