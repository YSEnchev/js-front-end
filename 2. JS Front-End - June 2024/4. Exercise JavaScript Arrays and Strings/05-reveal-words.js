function revealWords(specialWords, template) {
  // const words = specialWords.split(', ');
  // let finalSentence = template;

  // words.forEach((word) => {
  //   const searchValue = '*'.repeat(word.length);
  //   finalSentence = finalSentence.replace(searchValue, word);
  // });

  let finalSentence = template;

  specialWords.split(', ').forEach((word) => {
    const searchValue = '*'.repeat(word.length);
    finalSentence = finalSentence.replace(searchValue, word);
  });

  console.log(finalSentence);
}

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
