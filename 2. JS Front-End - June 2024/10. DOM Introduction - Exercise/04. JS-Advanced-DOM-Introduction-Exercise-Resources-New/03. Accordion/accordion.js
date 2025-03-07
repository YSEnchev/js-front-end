function toggle() {
  const buttonElement = document.querySelector('.head span.button');
  const extraElement = document.querySelector('#extra');

  const { display } = extraElement.style;
  const isHidden = display === 'none';

  if (!display || isHidden) {
    extraElement.style.display = 'block';
    buttonElement.textContent = 'Less';
  } else {
    extraElement.style.display = 'none';
    buttonElement.textContent = 'More';
  }
}
