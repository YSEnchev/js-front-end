function stringSubstring(specialWord, text) {
  //   const match = text
  //     .split(' ')
  //     .find((element) => element.toLowerCase() === specialWord.toLowerCase());
  //   console.log(match ? specialWord : `${specialWord} not found!`);

  const regex = new RegExp(`\\b${specialWord}`, 'i');
  const result = text.match(regex);

  if (result !== null) {
    console.log(specialWord);
  } else {
    console.log(`${specialWord} not found!`);
  }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
