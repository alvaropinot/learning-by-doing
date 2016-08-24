var test = require('tape');

var nameScore = require('../../src/what-is-my-name-score');

var alpha = {
  'ABCDE': 1,
  'FGHIJ': 2,
  'KLMNO': 3,
  'PQRST': 4,
  'UVWXY': 5
};

test('[nameScore] should be 20', function(t) {
  var actual = nameScore('Mary Jane', alpha);
  var expected = {
    score: 20
  };
  t.deepEqual(actual, expected);
  t.end();
});

test('[nameScore] should be 41', function(t) {
  var actual = nameScore('Luke Skywalker', alpha);
  var expected = {
    score: 41
  };
  t.deepEqual(actual, expected);
  t.end();
});

test('[nameScore] should be 23', function(t) {
  var actual = nameScore('Zoe Andrews', alpha);
  var expected = {
    score: 23
  };
  t.deepEqual(actual, expected);
  t.end();
});

test('[nameScore] should be 26', function(t) {
  var actual = nameScore('Greg Z MacDonald', alpha);
  var expected = {
    score: 26
  };
  t.deepEqual(actual, expected);
  t.end();
});
