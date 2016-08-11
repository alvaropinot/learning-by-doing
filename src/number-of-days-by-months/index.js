function numberOfDaysByMonths (months) {
  var years = Math.floor(months / 12);
  return 30 * months + 5 * years;
}

module.exports = numberOfDaysByMonths;
