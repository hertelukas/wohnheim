const express       = require('express'),
      router        = express.Router();


router.get('/', function(req, res){
    res.redirect('/login');
});

router.get('/login', function(req, res){
    res.send("Login");

})

module.exports = router;