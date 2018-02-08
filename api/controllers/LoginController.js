var unirest = require('unirest');

module.exports = {
  index: function (req, res) {
    if (typeof req.session.estado !== 'undefined' && req.session.estado == 'activo'){
      return res.redirect(sails.config.globals.base_url);
    }else{
      var locals = {'title': 'Bienvenido', 'mensaje': false};
      return res.view('login/index', locals);
    }
  },
  acceder: function (req, res) {
    unirest.post(sails.config.globals.servicios['accesos'] + 'usuario/acceder?usuario=' + req.param('usuario') + '&contrasenia=' + req.param('contrasenia'))
      .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .send({ 'usuario': req.param('usuario'), 'contrasenia': req.param('contrasenia') })
      .end(function (response) {
        if (response.body == 1){
          req.session.estado = 'activo';
          req.session.usuario = req.param('usuario');
          req.session.momento = new Date();
          res.redirect(sails.config.globals.base_url);
        }else{
          var locals = {'title': 'Bienvenido', 'mensaje': true};
          return res.view('login/index', locals);
        }
      });
  },
  usuario: function (req, res) {
    var rpta = '';
    rpta = rpta + 'estado : ' + req.session.estado + '<br>';
    rpta = rpta + 'usuario : ' + req.session.usuario + '<br>';
    rpta = rpta + 'momento : ' + req.session.momento;
    return res.send(rpta);
  },
  salir: function (req, res) {
    req.session.destroy(function(err) {
      return res.redirect(sails.config.globals.base_url + 'login');
    });
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  },
};
