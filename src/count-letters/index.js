function countLetters (text, letter) {
  return text.split('').reduce(function (acc, l) {
    return l.toLowerCase() === letter.toLowerCase() ?
      acc + 1 :
      acc;
  }, 0);
}

module.exports = countLetters;
