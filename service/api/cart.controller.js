"use strict";

var lib = require("../../lib/index");

var saveCartData = function (req, res) {

    var context = {
        req: req,
        body: req.body 
    }
    console.log("context",context.body);

    lib.saveCartData(context, function (e, r){
        return res.json (e || r);
    });

}


var getCartData = function (req, res) {

    var context = {
        req: req
    }

    lib.getCartData(context, function (e, r){
        return res.json (e || r);
    });

}


var savePlacedData = function (req, res) {

    var context = {
        req: req,
        body: req.body 
    }
    console.log("context",context.body);

    lib.savePlacedData(context, function (e, r){
        return res.json (e || r);
    });

}

var getPlacedData = function (req, res) {

    var context = {
        req: req
    }

    lib.getPlacedData(context, function (e, r){
        return res.json (e || r);
    });

}


exports.saveCartData = saveCartData;
exports.getCartData = getCartData;
exports.savePlacedData = savePlacedData;
exports.getPlacedData = getPlacedData;
