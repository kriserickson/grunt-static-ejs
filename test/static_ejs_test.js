'use strict';

var grunt = require('grunt');
var path = require('path');

exports.ejs_static = {

  test_simple: function(test) {
    test.expect(1);

    var actual = grunt.file.read(path.resolve('test/results/test_simple.html'));
    var expected = grunt.file.read(path.resolve('test/expected/test_simple.html'));
    test.equal(actual, expected, 'Test Simple should output file exactly the same with no options');

    test.done();
  }


};
