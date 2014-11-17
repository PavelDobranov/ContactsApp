var mongoose = require('mongoose');

var db;

module.exports = function (config) {
  mongoose.connect(config.dbConnection);
  db = mongoose.connection;

  db.on('error', function (err) {
    console.log('Database error: ' + err); // TODO: Error handling
  });

  db.once('open', function (err) {
    if (err) {
      console.log('Database could not be opened: ' + err); // TODO: Error handling
    } else {
      console.log('Database up and running...');
    }
  });
};
