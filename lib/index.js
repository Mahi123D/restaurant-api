"use strict";
var mongoose = require('mongoose');
var cartModel = mongoose.model("cart");
var placeModel = mongoose.model('order_placed');

var saveCartData = function (context, cb) {

    var cart = new cartModel();
    cart.costumer_id = context.body.costumer_id;
    cart.name = context.body.items;
    cart.qty = context.body.qty;
    cart.price = context.body.price;
    cart.total_price = context.body.total_price;
    cart.save((err, docs) => {
        return cb({
            status: "success",
        });
    });
}

var getCartData = function (context, cb) {

    cartModel.find({}, function (e, r) {
        return cb({
            status: "success",
            details: r
        });
    });
}

var savePlacedData = function (context, cb) {

    console.log("context", context.body);
    var placed = new placeModel();
    placed.costumer_id = context.body.costumer_id;
    placed.total_qty = context.body.total_qty;
    placed.price = context.body.price;
    placed.total_price = context.body.total_price;

    placeModel.findOne({costumer_id: context.body.costumer_id}, function (e, r) {
        
        var r =r;
        if(r){
    placeModel.updateOne({ costumer_id: context.body.costumer_id },
        {
            $set: { total_qty: context.body.total_qty, price: context.body.price, total_price: context.body.total_price },
        }, (err, docs) => {
            return cb({
                status: "success",
            });
        });
    }else{
        placed.save((err, docs) => {
            return cb({
                status: "success",
            });
        });
    }
    });
}

var getPlacedData = function (context, cb) {

    placeModel.find({}, function (e, r) {
        return cb({
            status: "success",
            details: r
        });
    });
}


exports.saveCartData = saveCartData;
exports.getCartData = getCartData;
exports.savePlacedData = savePlacedData;
exports.getPlacedData = getPlacedData;
