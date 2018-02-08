var models = require('../../models/ubicaciones');

module.exports = {
  listar: function (req, res) {
    models.deparartamento.findAll({attributes: ['id', 'nombre']}).then(function (departamentos) {
      return res.send(JSON.stringify(departamentos));
    });
  },
};
