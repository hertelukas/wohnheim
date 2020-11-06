
const express       = require('express'),
      app           = express();


const indexRoutes   = require('./routes/index.js');


app.set('view engine', 'ejs');

app.use(indexRoutes);


var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server has started on Port ' + port);
});