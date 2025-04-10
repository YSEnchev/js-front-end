function solve() {
  const sectionElements = document.querySelectorAll('section');

  const correctAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents',
  ];
  const userAnswers = [];

  function showUserResults() {
    const correctAnswerCount = userAnswers.reduce(
      (totalCount, currentAnswer, index) =>
        currentAnswer === correctAnswers[index]
          ? (totalCount += 1)
          : totalCount,
      0
    );

    const headingResultsElement = document.querySelector('ul#results h1');
    // const headingResultsElement = document.getElementById('results');

    headingResultsElement.textContent =
      correctAnswerCount === correctAnswers.length
        ? `You are recognized as top JavaScript fan!`
        : `You have ${correctAnswerCount} right answers`;

    headingResultsElement.parentElement.parentElement.style.display = 'block';
    // headingResultsElement.style.display = 'block';
  }

  function onClickHandler(event) {
    const sectionToHide = sectionElements[userAnswers.length];
    const sectionToShow = sectionElements[userAnswers.length + 1];

    if (!!sectionToHide) {
      sectionToHide.style.display = 'none';
    }

    if (!!sectionToShow) {
      sectionToShow.style.display = 'block';
    }

    userAnswers.push(event.target.textContent.trim());

    if (userAnswers.length === correctAnswers.length) {
      showUserResults();
    }
  }

  document
    .querySelectorAll('.answer-wrap')
    .forEach((wrapElement) =>
      wrapElement.addEventListener('click', onClickHandler)
    );
}
