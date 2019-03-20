var ExpressApp = {
    init: function() {
        var express = require('express')
        var app = express();
        var fs = require('fs');

        var bodyParser = require('body-parser');
        var multer = require('multer');

        app.use(express.static('src'));
        app.use(express.static('img'));

        app.use(bodyParser.urlencoded( {extended: false}));
        app.use(multer( {dest: './imgUpload'}).array('image'));

        app.get('/', function(req, res) {
            res.sendFile( __dirname + '/src/' + 'index.html');
        })

        var server = app.listen(7777, function() {

            var host = server.address().address;
            var port = server.address().port;

            console.log("服务器运行在： http://%s:%s", host, port)
        })
    }

}

ExpressApp.init();
