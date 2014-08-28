var fs = require('fs');
var path = require('path');

module.exports.getStat = getStat;
module.exports.randomPath = randomPath;


// helper buddy to get a randomPath for writing tmp files
function randomPath () {
  return path.join(__dirname, Date.now() + '-' + Math.random().toString().substring(2));
}



// pass it a blob/stream/file/thing/dude/bro,
// and a callback (err, stat, tmpPath)
// it gets u the files stat obj
// and then it destroys that file
// gives u tmp path just in case?
//is the enc necessary? how to make it optional?
function getStat (blobStreamThingyDude, enc, cb) {
  var tmpFile = randomPath();
  var tmpWS = fs.createWriteStream(tmpFile);

  // might be YAGNI ATM
  var tmpDeleted = false;
  // hmmm....

  tmpWS.write(blobStreamThingyDude, enc, function(data, end, err){//is that even correct for the args?
    // do something with err if err lol
    // end();

    fs.stat(tmpFile, function(err, stat){
      cb(err, stat);
    });

    if(!tmpDeleted){
      fs.unlink(tmpFile, function(err){
        if(err) {
          cb(err);
        } else {
          tmpDeleted = true;
        }

        // blab loudly if there is an error
      });
    }

  });
  tmpWS.end();
  // tmpWS.on('finish', function(){

  // });
  // tmpWS.on('error', function(err){
  //     cb(err);
  // });
}
