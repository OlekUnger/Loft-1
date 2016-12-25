
var http = require('http'),
	fs = require('fs'),
	utils = require('./utils'),
	path = require('path'),
	config = require('./config.json');
	
var server = http.createServer(function(req, res){
	console.log('Поступил запрос', req.url);

	var url = req.url;
	if (url == '/'){
		url += config.defaultPage;
	}
	var target = './build'+ url;
	var code = 200;



	if(!fs.existsSync(target)){
		target = './build'/ + config.page404;
		code = 404;
	};

	var ext = path.extname(target);
	var encoding = config.mime[ext].encoding;
	var mimeType = config.mime[ext].type;
	

	utils.readFile(target, encoding)
		.then(function(content){
			res.setHeader('Content-Type', mimeType + '; charset=utf-8');
			res.writeHead(code);
			res.write(content);
			res.end();

		});
	
});
server.listen(8888);


