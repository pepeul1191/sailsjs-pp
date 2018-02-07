module.exports = {
  index: function (req, res) {
    var locals = {};
    return res.view('login/index', locals);;
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  }
};
