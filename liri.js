var keys = ('keys.js');
var Twitter = require('twitter');


var params = {screen_name: 'nodejs'};
exports.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
