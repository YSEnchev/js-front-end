function solve() {
  const textAreaElement = document.getElementById('input');
  const outputAreaElement = document.getElementById('output');

  function createParagraphElement(text) {
    const pElement = document.createElement('p');
    pElement.textContent = text;
    return pElement;
  }

  const sentence = textAreaElement.value
    .split('. ')
    .map((x) => x.trim().concat('.'));

  for (let i = 0; i < sentence.length; i += 3) {
    const currentText = sentence.slice(i, 3).join(' ');
    const currentParagraph = createParagraphElement(currentText);
    outputAreaElement.appendChild(currentParagraph);
  }

  console.log(sentence);
}
