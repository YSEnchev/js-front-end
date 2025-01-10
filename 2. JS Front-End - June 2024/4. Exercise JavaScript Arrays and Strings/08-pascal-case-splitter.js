function pascalCaseSplitter(textPascalCase) {
  result = textPascalCase.match(/[A-Z][a-z]*/g).join(', ');

  console.log(`${result}`);
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');
