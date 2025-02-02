function loadingBar(percents) {
  const maxPercent = 100;

  function printLoadedMessage() {
    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
  }

  function printLoadingMessage(loadedPercents, percentCount, dotCount) {
    const loadingState = `${'%'.repeat(percentCount)}${'.'.repeat(dotCount)}`;
    console.log(`${loadedPercents}% [${loadingState}]`);
    console.log('Still loading...');
  }

  if (percents === 100) {
    printLoadedMessage();
    return;
  }

  const maxSymbols = 10;
  const percentSymbolCount = parseInt(maxPercent * (percents * 0.001));
  const dotSymbolCount = maxSymbols - percentSymbolCount;

  printLoadingMessage(percents, percentSymbolCount, dotSymbolCount);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
