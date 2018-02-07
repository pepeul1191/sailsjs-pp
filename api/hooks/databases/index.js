const Sequelize = require('sequelize');

module.exports = function Databases(sails) {
  var ubicaciones = new Sequelize('database', 'username', 'password', {
  	host: 'localhost',
  	dialect: 'sqlite',
  	pool: {
  		 max: 5,
  		 min: 0,
  		 idle: 10000
  	},
  	storage: 'db/ubicaciones.db',
  	define: {
  		timestamps: false // true by default
  	}
  });

  return {
    ubicaciones: ubicaciones
  };
};
