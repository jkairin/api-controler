exports.getTweetRequest= function(req,res){
    var tweetRequest = tweetRequests.find(tweetRequest => tweetRequest.id === req.params.tweetRequestId);
    res.json(tweetRequest);
    
}

var tweetRequests = [{
    id: '1',
    device_token: '1',
    hashtags: "#ios #swift"
  }, {
    id: '2',
    device_token: '2',
    hashtags: "#android #kotlin"
  }, {
    id: '3',
    device_token: '3',
    hashtags: "#backend #nodejs"
  }];