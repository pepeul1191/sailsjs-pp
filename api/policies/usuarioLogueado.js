module.exports = function usuarioLogueado (req, res, next) {
  if (req.session.estado != 'activo') {
    return res.redirect('/login');
  }else{
    return next();
  }
};
