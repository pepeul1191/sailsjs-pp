const Sequelize = require('sequelize');

const Deparartamento = sails.hooks.databases.ubicaciones.define('departamentos', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	nombre: { type: Sequelize.STRING, allowNull: false,  },
});

const Provincia = sails.hooks.databases.ubicaciones.define('provincias', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	nombre: { type: Sequelize.STRING, allowNull: false,  },
	departamento_id: { type: Sequelize.INTEGER, references: {
		model: Deparartamento, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	}},
});

const Distrito = sails.hooks.databases.ubicaciones.define('distritos', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	nombre: { type: Sequelize.STRING, allowNull: false,  },
	provincia_id: { type: Sequelize.INTEGER, references: {
		model: Provincia, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	}},
});

exports.deparartamento = Deparartamento;
exports.provincia = Provincia;
exports.distrito = Distrito;
