function encodeAndDecodeMessages() {
  const [encodeBtnElements, decodeBtnElement] =
    document.querySelectorAll('button');
  const [encodeTextAreaElement, decodeTextAreaElement] =
    document.querySelectorAll('textarea');

  function encodeOrDecodeMessage(text, asciiDiff) {
    return text
      .split('')
      .map((char) => {
        const currentAsciiValue = char.charCodeAt(0);
        return String.fromCharCode(currentAsciiValue + asciiDiff);
      })
      .join('');
  }

  // function encodeMessage(text) {
  //   return text
  //     .split('')
  //     .map((char) => {
  //       const currentAsciiValue = char.charCodeAt(0);
  //       return String.fromCharCode(currentAsciiValue + 1);
  //     })
  //     .join('');
  // }

  // function decodeMessage(text) {
  //   return text
  //     .split('')
  //     .map((char) => {
  //       const currentAsciiValue = char.charCodeAt(0);
  //       return String.fromCharCode(currentAsciiValue - 1);
  //     })
  //     .join('');
  // }

  function encodeMessageHandler() {
    // decodeTextAreaElement.value = encodeMessage(encodeTextAreaElement.value);
    decodeTextAreaElement.value = encodeOrDecodeMessage(
      encodeTextAreaElement.value,
      1
    );
    encodeTextAreaElement.value = '';
  }

  function decodeMessageHandler() {
    // decodeTextAreaElement.value = decodeMessage(decodeTextAreaElement.value);
    decodeTextAreaElement.value = encodeOrDecodeMessage(
      decodeTextAreaElement.value,
      -1
    );
  }

  encodeBtnElements.addEventListener('click', encodeMessageHandler);
  decodeBtnElement.addEventListener('click', decodeMessageHandler);
}
