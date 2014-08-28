var fs = require('fs');
var path = require('path');

// module.exports.getStat = getStat;
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
// function getStat (blobStreamThingyDude, enc, cb) {
//   var tmpFile = randomPath();
//   var tmpWS = fs.createWriteStream(tmpFile);
//   var tmpDeleted = false;

//   tmpWS.write(blobStreamThingyDude, enc, function(data, end, err){//is that even correct for the args?
//     // do something with err if err lol


//     fs.stat(tmpFile, function(err, stat){
//       console.log(stat);
//       // invoke callback passing it the other stuff?
//       cb(err, stat);
//     });

//     if(!tmpDeleted){
//       fs.unlink(tmpFile, function(err){
//         // blab loudly if there is an error
//       });
//     }

//   });
//   tmpWS.on('error', function(){

//   });
//   tmpWS.on('close', function(){

//   });
// }
