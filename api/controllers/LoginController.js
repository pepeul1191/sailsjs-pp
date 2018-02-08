var unirest = require('unirest');

module.exports = {
  index: function (req, res) {
    var locals = {'title': 'Bienvenido', 'mensaje': false};
    return res.view('login/index', locals);
  },
  acceder: function (req, res) {
    unirest.post(sails.config.globals.servicios['accesos'] + 'usuario/acceder?usuario=' + req.param('usuario') + '&contrasenia=' + req.param('contrasenia'))
      .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .send({ 'usuario': req.param('usuario'), 'contrasenia': req.param('contrasenia') })
      .end(function (response) {
        if (response.body == 1){
          res.redirect(sails.config.globals.base_url);
        }else{
          var locals = {'title': 'Bienvenido', 'mensaje': true};
          return res.view('login/index', locals);
        }
      });
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  },
};
