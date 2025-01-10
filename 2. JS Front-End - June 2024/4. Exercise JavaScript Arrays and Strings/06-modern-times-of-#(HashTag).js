function modernTimesOfHashTag(inputString) {
  const regex = /#[a-zA-z]+/gm;

  const matches = inputString.matchAll(regex);
  for (const match of matches) {
    console.log(match[0].substring(1));
  }

  //   inputString.split(/\s/g).forEach((word) => {
  //     const result = regex.exec(word);

  //     if (result?.length > 0) {
  //       [match] = result;

  //       console.log(match.substring(1));
  //     }
  //   });
}

modernTimesOfHashTag(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);
