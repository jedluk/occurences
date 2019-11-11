String.prototype.occurences = function(char) {
  if (typeof char !== 'string') {
    return [];
  }
  var index = -1;
  var pos = 0;
  var occurences = [];
  while (pos !== -1) {
    pos = this.indexOf(char, index + 1);
    if (pos !== -1) {
      index = pos;
      occurences.push(index);
    }
  }
  return occurences;
};
