var models = require('../../models/ubicaciones');

module.exports = {
  listar: function (req, res) {
    var rpta = models.deparartamento.findAll({attributes: ['id', 'nombre']}).then(function (departamentos) {
      return res.send(JSON.stringify(departamentos));
    });
  },
};
