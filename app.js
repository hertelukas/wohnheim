
const express       = require('express'),
      app           = express(),
      mongoose      = require('mongoose'),
      passport      = require('passport'),
      LocalStategy  = require('passport-local');


const indexRoutes   = require('./routes/index.js');

const User          = require('./models/user');


app.set('view engine', 'ejs');

app.use(indexRoutes);

mongoose.connect("mongodb+srv://admin:Fz05cKoP4PPx@cluster0.b805a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the db!');
}).catch(err => {
    console.log('Error connecting to the db: ' + err.message)
});

app.use(require('express-session')({
    secret: "wmwmwmw ohmann",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
//Local variables, can be used in every route
app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
})


var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server has started on Port ' + port);
});