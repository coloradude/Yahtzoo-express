var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/leaderboard', function(req, res){
  var name = req.body.name[1];
  var score = req.body.highScore;
  var creditCard = req.body.creditCard[1];
  var SSN = req.body.SSN[1];
  console.log(name, score, creditCard, SSN);
})

module.exports = router;
