Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
  // Implement me!
  return text.length !== 0 ? [...new Set(text)].map(elem => {
    return [elem, text.split([elem]).length -1]
}): []
}

orderedCount("abracadabra")
