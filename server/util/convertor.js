var api = require('./api.js');

function checkState(url) {
  while (true) {
    var response = api.callApi(url);
    var output = [];
    if (response) {
      output = response.split("|");
      if (output[0] == "OK") {
        return (process.env.apiProtocol + output[1] + process.env.apiMidUrl + output[2]);
      }
      if (output[0] == "ERROR" && (output[1] == 1 || output[1] == 5)) {
        return "ERROR";
      }
    }
  }
}

module.exports = {
  getMP3: function createResponse(query) {
    console.log('query::', query);
    let videoID = query.videoID;
    if (videoID) {
      let format = "mp3";
      let backendID = Math.floor(Math.random() * 3500000)
      let url = "check.php?v=" + videoID + "&f=" + format + "&h=" + backendID;
      return {resultURL: checkState(url)};
    } else
      return {error: 'Empty or wrong query parameter.'};
  }
};
