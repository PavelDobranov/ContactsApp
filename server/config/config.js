var path = require('path');

var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  development: {
    port: 3030,
    dbConnection: 'mongodb://admin:contactsapp@ds053320.mongolab.com:53320/devcontactsapp',
    rootPath: rootPath
  },
  production: {
    port: process.env.PORT,
    dbConnection: 'mongodb://admin:contactsapp@ds053320.mongolab.com:53320/prodcontactsapp',
    rootPath: rootPath
  }
};
