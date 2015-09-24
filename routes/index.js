var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")

var userScoreAttr = require("./userScore.js"),
    userScoreSchema = mongoose.Schema(userScoreAttr);

var Score = mongoose.model('Score', userScoreSchema);
    mongoose.connect('mongodb://localhost/leaderboard');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/leaderboard', function(req, res){
  console.log(req.body)

  var newScore = new Score({

    name: req.body.name[1],
    score: req.body.score,
    creditCard: req.body.creditCard[1],
    SSN: req.body.SSN[1]

  })

  Score.save(newScore);
  console.log('sd')
  //console.log(leaderboard.aggregate([ {$sort: {score: -1}}, {$limit: 10} ]));

  // leaderboard.find({})

})

module.exports = router;
