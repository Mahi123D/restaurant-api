var mongoose = require ('mongoose');

   var cartSchema = new  mongoose.Schema({
    costumer_id: String,
    name: String,
    qty: Number,
    price: String,
    total_price: String
});

var placedSchema = new  mongoose.Schema({
    costumer_id: String,
    total_qty: String,
    price: Number,
    total_price: String
})


mongoose.model("cart", cartSchema);
mongoose.model("order_placed", placedSchema);