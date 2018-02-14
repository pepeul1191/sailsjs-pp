var ViewService = {
	loadCss: function(csss) {
    var rpta = "";
    if (typeof csss != 'undefined'){
      for(var i = 0; i < csss.length; i++){
        rpta = rpta + '<link rel="stylesheet" type="text/css" href="'+ sails.config.globals.static_url + csss[i] + '.css" />'
      }
    }
    return rpta;
	},
	loadJs: function(jss) {
    var rpta = "";
    if (typeof jss != 'undefined'){
      for(var i = 0; i < jss.length; i++){
        rpta = rpta + '<script src="' + sails.config.globals.static_url + jss[i] + '.js"></script>'
      }
    }
    return rpta;
	},
};

module.exports = ViewService;
