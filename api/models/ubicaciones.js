const Sequelize = require('sequelize');

const Deparartamento = sails.hooks.databases.ubicaciones.define('departamentos', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	nombre: { type: Sequelize.STRING, allowNull: false,  },
});

exports.deparartamento = Deparartamento;
