module.exports = {
  listar: function (req, res) {
    return res.send('Listar departamentos <br> BASE_URL : ' + sails.config.globals.base_url);
  },
};
