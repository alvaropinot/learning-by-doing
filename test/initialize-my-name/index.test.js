var test = require('tape');

var initializeNames = require('../../src/initialize-my-name');

test('[initializeNames] name with no middle name', function(t) {
  var actual = initializeNames('Jack Ryan');
  var expected = 'Jack Ryan';
  t.equal(actual, expected);
  t.end();
});

test('[initializeNames] name with middle name', function(t) {
  var actual = initializeNames('Lois Mary Lane');
  var expected = 'Lois M. Lane';
  t.equal(actual, expected);
  t.end();
});

test('[initializeNames] name with no middle name and no last name', function(t) {
  var actual = initializeNames('Dimitri');
  var expected = 'Dimitri';
  t.equal(actual, expected);
  t.end();
});

test('[initializeNames] name with two middle names', function(t) {
  var actual = initializeNames('Alice Betty Catherine Davis');
  var expected = 'Alice B. C. Davis';
  t.equal(actual, expected);
  t.end();
});
