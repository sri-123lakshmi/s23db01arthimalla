const mongoose = require("mongoose")
const KangarooSchema = mongoose.Schema({
Kangaroo_color: String,
Kangaroo_breed: {type:String,length:15},
Kangaroo_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("Kangaroo",KangarooSchema)