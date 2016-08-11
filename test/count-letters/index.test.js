var test = require('tape');

var countLetters = require('../../src/count-letters');

test('[Count letters] should have 3 `e`', function(t) {
  var actual = countLetters('hello this is my friend Emily', 'e');
  var expected = 3;
  t.equal(actual, expected);
  t.end();
});

test('[Count letters] should have 4 `i`', function(t) {
  var actual = countLetters('hello this is my friend Emily', 'i');
  var expected = 4;
  t.equal(actual, expected);
  t.end();
});

test('[Count letters] should have 4 `i`', function(t) {
  var actual = countLetters('hello this is my friend Emily', 'I');
  var expected = 4;
  t.equal(actual, expected);
  t.end();
});
