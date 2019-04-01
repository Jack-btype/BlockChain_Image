var ExpressApp = {
    init: function() {
        var express = require('express')
        var app = express();
        var fs = require('fs');

        var bodyParser = require('body-parser');
        var multer = require('multer');

        app.use(express.static('src'));
        app.use(express.static('img'));
        app.use(express.static('imgUpload'));

        app.use(bodyParser.urlencoded( {extended: false}));
        app.use(multer( {dest: './imgUpload'}).array('image'));

        app.get('/', function(req, res) {
            res.sendFile( __dirname + '/src/' + 'index.html');
        })

        app.post('/upload', function(req, res) {
            if (req.files[0] === undefined) {
                console.log("there is no file was sent.")
                res.end("there is no file was sent");
            }
            console.log(req.files[0]);
        
            var des_file = __dirname + "/imgUpload/" + req.files[0].originalname;
            fs.readFile( req.files[0].path, function(err, data) {
                fs.writeFile(des_file, data, function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        response = {
                            message: 'File uploaded successfully',
                            filename: req.files[0].originalname
                        };
                    }
                    console.log( response );
                    res.sendFile(  __dirname + '/src/' + 'upload-success.html');
                });
            });
        });
        var server = app.listen(7777, function() {

            var host = server.address().address;
            var port = server.address().port;

            console.log("服务器运行在： http://%s:%s", host, port);
        })
    }
}

ExpressApp.init();
