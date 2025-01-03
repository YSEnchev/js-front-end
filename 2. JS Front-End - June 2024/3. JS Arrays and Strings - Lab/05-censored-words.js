function censoredWords(text, replaceWord) {

    const replacedText = text.replaceAll(replaceWord, '*'.repeat(replaceWord.length));
    console.log(replacedText);

}

// function solveWithoutReplaceAll(text, word) {

//     while (text.includes(word)) {
//         text = text.replace(word, '*'.repeat(word.length))
//     }
//     console.log(text);

// }

censoredWords('hidden Find the hidden word', 'hidden');