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

  console.log(sentence);
}
