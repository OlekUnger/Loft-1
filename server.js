
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var	path = require('path');	
// typeMime = {
// 	'.html': 'text/html',
// 	'.htm': 'text/html',
// 	'.js': 'text/javascript',
// 	'.css': 'text/css',
// 	'.png': 'image/png',
// 	'.jpg': 'image/jpeg'
// };

// var server = http.createServer(function(req, res){
// 	var _url = url.parse(req.url),
// 		filename = _url.pathname.substring(1),
// 		extname,
// 		type,
// 		img;
// 	if(_url.pathname ==='./build'+ '/') {
// 		filename = 'index.html';
// 	}
// 	extname = path.extname(filename);
// 	type = typeMime[path.extname(filename)];
// 	if((extname==='.png') ||(extname === '.jpg')) {
// 		img=fs.readFileSync(filename);
// 		res.writeHead(200, {
// 			'Content-Type': type
// 		});
// 		res.write(img, 'hex');
// 		res.end();
// 	} else {
// 		fs.readFile(filename, 'utf8', function(err,content){
// 			if(err){
// 				res.writeHead(404, {
// 					'Content-Type': 'text/plain; charset=utf-8'
// 				});
// 				res.write(err.message);
// 				res.end();
// 			} else {
// 				res.writeHead(200, {
// 					'Content-Type': type
// 				});
// 				res.write(content);
// 				res.end();
// 			}
// 		})
// 	}
// });
// server.listen(80);



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
server.listen(8080);


// var http = require('http');
// var fs = require('fs');
// var config = {
// 	defaultIndex: 'index.html',
// 	page404: '404.html',
// 	mime: {
// 		'.html': 'text/html',
// 		'.htm': 'text/html',
// 		'.js': 'text/javascript',
// 		'.css': 'text/css',
// 		'.png': 'image/png',
// 		'.jpg': 'image/jpeg'
// 	}
// };
// var server = http.createServer(function(req, res){
// 	console.log('Поступил запрос', req.url);

// 	var url = req.url;
// 	if (url == '/'){
// 		url += config.defaultIndex;
// 	}
// 	var target = './build'+ url;
// 	var code = 200;

// 	if(!fs.existsSync(target)){
// 		target = './build/' + config.page404;
// 		code = 404;
// 	}
// 	var content = fs.readFileSync(target, 'utf-8');
// 	res.writeHead(code);
// 	res.write(content);
// 	res.end();

	
	
// });
// server.listen(80);