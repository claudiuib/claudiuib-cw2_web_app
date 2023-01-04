var express = require("express");
var app = express();
app.set('json spaces', 3);
const cors = require('cors');
app.use(cors());
const routerApi= require('./routes/apiRouter');
app.use(express.static("public"));
app.use('/',routerApi);

const port = process.env.PORT ? process.env.PORT : 3030;
app.listen(port,function(){
    console.log(`Server Running on port: http://localhost:${port}`);
});