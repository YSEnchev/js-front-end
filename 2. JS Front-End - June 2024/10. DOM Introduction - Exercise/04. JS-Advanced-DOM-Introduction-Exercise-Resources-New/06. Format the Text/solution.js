function solve() {
  const textAreaElement = document.getElementById('input');
  const outputAreaElement = document.getElementById('output');

  function createParagraphElement(text) {
    const pElement = document.createElement('p');
    pElement.textContent = text;
    return pElement;
  }

  const sentence = textAreaElement.value
    .split('.')
    .filter(Boolean)
    .map((x) => x.trim());

  for (let i = 0; i < sentence.length; i += 3) {
    debugger;
    const currentText = sentence
      .slice(i, i + 3)
      .join('.')
      .concat('.');
    const currentParagraph = createParagraphElement(currentText);
    outputAreaElement.appendChild(currentParagraph);
  }

  console.log(sentence);
}
