function lockedProfile() {
  const buttonElements = document.querySelectorAll('div.profile button');

  function showMoreClickHandler(event) {
    const button = event.target;
    const [, unlockInputElement] =
      button.parentElement.querySelectorAll('input');

    if (!unlockInputElement.checked) {
      return;
    }

    const hiddenDataElement = button.parentElement.querySelector('div');

    if (button.textContent === 'Show more') {
      hiddenDataElement.style.display = 'block';
      button.textContent = 'Hide it';
    } else {
      hiddenDataElement.style.display = 'none';
      button.textContent = 'Show more';
    }
  }

  buttonElements.forEach((buttonElement) =>
    buttonElement.addEventListener('click', showMoreClickHandler)
  );
}
