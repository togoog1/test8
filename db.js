"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionString = 'mongodb://togoog1:Soalartest1@ds151461.mlab.com:51461/codercampsna';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
