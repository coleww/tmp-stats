var fs = require('fs');
var path = require('path');
var test = require('tap').test;
var tmpStream = require('./');

test('tmp-stream', function(t) {
    t.plan(4);
    files = fs.readdirSync('/');
    tmpStream.getStat("hello world!", 'utf-8', function(err, stat){
      t.notOk(err, 'no err');
      t.ok(stat, 'lalalalalala');
      t.ok(stat.size === 12, '12 chars!');
      t.ok(files.length === fs.readdirSync('/').length, 'cleans up after itself!');
      t.end();
    });
});
