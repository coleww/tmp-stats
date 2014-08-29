var fs = require('fs');
var path = require('path');
var test = require('tap').test;
var tmpStream = require('./');

test('tmp-stream', function(t) {
    t.plan(3);
    tmpStream.getStat("hello world!", 'utf-8', function(err, stat){
      t.notOk(err, 'no err');
      t.ok(stat, 'lalalalalala');
      t.ok(stat.size === 12, '12 chars!');
      t.end();
    });
});
