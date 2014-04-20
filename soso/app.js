
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);

app.get('/modules.js', function(req,res){

    if(req.query && req.query.mod){
        var mods = req.query.mod.split(',');
        var content = [];
        for(var i = 0; i< mods.length; i++){
            mod = mods[i];
            content.push(
                "__cjsload&&__cjsload('"
                + mod
                + "','"
                + fs.readFileSync(__dirname + '/mod/' + mod + '.js')
                    .toString() // buffer -> string
                    .replace(/\n */g,' ') // 去掉回车
                    // .replace(/\s+/g,' ') // 将多个空格变成一个
                    .replace(/\\/g,'\\\\') // 转义 \
                    .replace(/'/g,"\\'") // 转义 '
                + " ');"
            );
        }
        content = content.join('\n');
        res.header('Content-Type','text/javascript');
        res.send(content);
    }
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
