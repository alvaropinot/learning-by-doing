var test = require('tape');

var readBook = require('../../src/reading-a-book');

test('[readBook] should be 10', function(t) {
  var actual = readBook('Hello World!');
  var expected = 10;
  t.equal(actual, expected);
  t.end();
});

test('[readBook] should be 24', function(t) {
  var actual = readBook('black cat and white cat all are cat');
  var expected = 24;
  t.equal(actual, expected);
  t.end();
});

test('[readBook] should be 24', function(t) {
  var actual = readBook('black cat and white cat all are CAT');
  var expected = 24;
  t.equal(actual, expected);
  t.end();
});

test('[readBook] should be 86', function(t) {
  var text = 'Related Articles: Ruby Environment, CoffeeScript Environment, ' +
    'JavaScript Environment, Python Environment, Haskell Environment, ' +
    'Java Environment, Clojure Environment, .NET Environment.';
  var actual = readBook(text);
  var expected = 86;
  t.equal(actual, expected);
  t.end();
});

test('[readBook] should be 78', function(t) {
  var text = 'Related Articles: Ruby Environment, Coffee Script Environment, ' +
    'Java Script Environment, Python Environment, Haskell Environment, ' +
    'Java Environment, Clojure Environment, .NET Environment.';
  var actual = readBook(text);
  var expected = 78;
  t.equal(actual, expected);
  t.end();
});
