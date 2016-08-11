var test = require('tape');

var numberOfDaysByMonths = require('../../src/number-of-days-by-months');

test('[Number of days by month] should be 60 days', function(t) {
  var actual = numberOfDaysByMonths(2);
  var expected = 60;
  t.equal(actual, expected);
  t.end();
});

test('[Number of days by month] should be 365 days', function(t) {
  var actual = numberOfDaysByMonths(12);
  var expected = 365;
  t.equal(actual, expected);
  t.end();
});

test('[Number of days by month] should be 515 days', function(t) {
  var actual = numberOfDaysByMonths(17);
  var expected = 515;
  t.equal(actual, expected);
  t.end();
});

test('[Number of days by month] should be 760 days', function(t) {
  var actual = numberOfDaysByMonths(25);
  var expected = 760;
  t.equal(actual, expected);
  t.end();
});
