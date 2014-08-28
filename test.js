var os = require('os');
var fs = require('fs');
var path = require('path');
var test = require('tap').test;
var rimraf = require('rimraf');

var tmpStream = require('./');
var blobPath = path.join(os.tmpdir(), 'tmp-stream-tests');

var common = {
  setup: function(t, cb) {
    rimraf(blobPath, function() {
      cb(null);
    });
  },
  teardown: function(t, store, blob, cb) {
    rimraf(blobPath, cb);
  }
};

test('get random path', function(t) {
  common.setup(t, function(err) {
    t.plan(3);
    t.notOk(err, 'no err');
    var randoPath = tmpStream.randomPath();
    var randoDir = path.dirname(randoPath);
    t.ok(fs.statSync(randoDir).isDirectory(), 'is valid dir');
    var pathes = [];
    for(var i = 0; i < 100; i++){
      pathes.push(tmpStream.randomPath());
    }
    var uniqPathes = pathes.filter(function(val, index, self){
      return self.indexOf(val) === index;
    });
    t.ok(pathes.length === uniqPathes.length, 'is pretty random');
    common.teardown(t, null, null, function(err) {
      t.end();
    });
  });
});