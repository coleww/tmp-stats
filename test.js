var fs = require('fs');
var path = require('path');
var test = require('tap').test;
var tmpStream = require('./');

test('get random path', function(t) {
    t.plan(2);

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

    t.end();
});

    tmpStream.getStat("hello world!", 'utf-8', function(err, stat){
      test('there is a thing', function(t){
        t.plan(3);
        t.notOk(err, 'no err');
        t.ok(stat, 'lalalalalala');
        t.ok(stat.size === 12, '12 chars!');
        t.end();
      });
      test('it delete tmpfile', function(t){
        t.plan(3);
        t.notOk(err, 'no err');
        t.ok(stat, 'lalalalalala');
        t.ok(stat.size === 12, '12 chars!');
      });
    });

