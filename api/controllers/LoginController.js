module.exports = {
  index: function (req, res) {
    var locals = {};
    return res.view('login/index', locals);;
  },
  acceder: function (req, res) {
    return res.send('usuario: ' + req.param('usuario') + '</br>contraseña: ' + req.param('contrasenia'));
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  },
};
