function solve() {
  const validNamingConventions = ['Camel Case', 'Pascal Case'];

  const textInputElement = document.querySelector('#text');
  const namingConventionElement = document.querySelector('#naming-convention');

  const resultElement = document.querySelector('.result-container #result');

  if (!validNamingConventions.includes(namingConventionElement.value)) {
    resultElement.textContent = 'Error!';
    return;
  }

  const pascalCaseText = textInputElement.value
    .toLowerCase()
    .split(' ')
    .map((firstLetter) =>
      firstLetter[0].toUpperCase().concat(firstLetter.slice(1))
    )
    .join('');

  resultElement.textContent =
    namingConventionElement.value === validNamingConventions[0]
      ? pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1))
      : pascalCaseText;
}
