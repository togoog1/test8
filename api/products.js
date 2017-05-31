"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../db");
var mongodb = require("mongodb");
var router = express.Router();
router.get('/:id', function (req, res) {
    var productId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('products').findOne(productId).then(function (product) {
        res.json(product);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('products').find().toArray().then(function (products) {
        res.json(products);
    });
});
router.post('/', function (req, res) {
    var product = req.body;
    product._id = new mongodb.ObjectID(product._id);
    db_1.default.db.collection('products').save(product).then(function (newProduct) {
        res.json(newProduct);
    });
});
exports.default = router;
