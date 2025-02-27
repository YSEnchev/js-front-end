function extractText() {
  const ulElements = document.getElementById('items');
  const resultElement = document.getElementById('result');

  //   const textResult = ulElements.textContent
  //     .split('\n')
  //     .map((row) => row.trim())
  //     .join('\n')
  //     .trim();

  textResult = ulElements.innerText;

  resultElement.textContent = textResult;
}
