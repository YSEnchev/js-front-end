function repeatStringRecursive(word, count) {
  if (count == 1) {
    return word;
  }

  return word + repeatStringRecursive(word, count - 1);
}
console.log(repeatStringRecursive('abc', 3));
console.log(repeatStringRecursive('Enchev', 7));
