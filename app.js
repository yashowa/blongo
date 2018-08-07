

var CONF = require('./config/conf.js');
var params = CONF.params;
var port =params.port;
var express = require('express');
const path = require('path')
var app =express();
var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('views','./views');
app.use(express.static(path.join(__dirname, "js")));
app.set('view engine', 'mustache');

app.get('/',function(req,res){
  var datas={
    title:"Home",
    content:"mycontent",
    posts:{
      title:"Home",
      content:"mycontent"
    },
    params:params
  }
  res.render('index',{"datas":datas});
})


app.listen(port,function(){
  console.log("server launched on port" + port);
})
