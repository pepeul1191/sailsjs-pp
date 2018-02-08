var models = require('../../models/ubicaciones');

module.exports = {
  listar: function (req, res) {
    models.distrito.findAll({attributes: ['id', 'nombre'] ,where: { provincia_id : req.param('provincia_id') }}).then(function (distritos) {
        return res.send(JSON.stringify(distritos));
    });
  },
};
