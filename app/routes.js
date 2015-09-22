var monk = require("monk");

var config = require("./config.js");

var db = monk(config.dbUrl);

var apiDemo = db.get("apiDemo");

exports.getAllPeople = function(req,res) {
  apiDemo.find({}, function(err, orders) {
    if(err) res.json(500, err);
    else res.json(orders);
  });
};
