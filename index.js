var fs = require('fs');
var path = require('path');
var os = require('os');

module.exports.getStat = getStat;
module.exports.randomPath = randomPath;

// helper buddy to get a randomPath for writing tmp files
function randomPath () {
  return path.join(os.tmpdir(), Date.now() + '-' + Math.random().toString().substring(2));
}

// writes a stream to a file, gets the stats, and then deletes the file
// for determining file size before upload and etc.
function getStat (data, enc, cb) {
  var tmpFile = randomPath();
  var tmpWS = fs.createWriteStream(tmpFile);
  var tmpDeleted = false;
  var deleteTmp = function(tmpFile){
    if(!tmpDeleted){
      fs.unlink(tmpFile, function(err){
        if(err) {
          cb(err);
        } else {
          tmpDeleted = true;
        }
      });
    }
  };


  tmpWS.write(data, enc, function(data, end, err){
    if(err) {
      cb(err);
      deleteTmp(tmpFile);
    }
    fs.stat(tmpFile, function(err, stat){
      deleteTmp(tmpFile);
      cb(err, stat, tmpFile);
    });
  });
  tmpWS.end();
}
