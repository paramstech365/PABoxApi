var mongoose = require('mongoose');
var config = require('config');
var dbConfig = config.get('dbConfig.host');

mongoose.connect(dbConfig);

module.exports.Program = require('./program');

