var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tontestdb1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  email : {type : String},
  passwd : {type : String},
  name : {type : String},
  company : {type : String},
  token : {type : String}
});
Users = mongoose.model('users', UsersSchema);

exports.Users = Users;
exports.db = db;
