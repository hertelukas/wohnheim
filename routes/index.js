const express       = require('express'),
      router        = express.Router();


router.get('/', function(req, res){
    res.send("This webiste works :(");
});

module.exports = router;