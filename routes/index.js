var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/leaderboard')
var topScores = db.get('topScores')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/leaderboard', function(req, res){

  topScores.insert({
    name: req.body.name[1],
    score: Number(req.body.score),
    creditCard: req.body.creditCard[1],
    SSN: req.body.SSN[1]
  }, function(err, data){
    topScores.find({}, {limit : 10, sort: {score:-1}},
      function(err, data){
        res.render('leaderboard', {data: data}, function(err, html){
          res.send(html)
        });
    })
  })


})

module.exports = router;

