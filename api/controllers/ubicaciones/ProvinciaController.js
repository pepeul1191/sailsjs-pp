var models = require('../../models/ubicaciones');

module.exports = {
  listar: function (req, res) {
    models.provincia.findAll({attributes: ['id', 'nombre'] ,where: { departamento_id : req.param('departamento_id') }}).then(function (provincias) {
        return res.send(JSON.stringify(provincias));
    });
  },
};
