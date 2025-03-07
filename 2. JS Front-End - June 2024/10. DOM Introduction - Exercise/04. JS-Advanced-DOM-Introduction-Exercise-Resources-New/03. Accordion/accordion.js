function toggle() {
  const buttonElement = document.getElementsByClassName('button');
  //   const buttonElement = document.querySelector('.head span.button');

  const extraElement = document.getElementById('extra');
  //   const extraElement = document.querySelector('#extra');

  const { display } = extraElement.style;
  const isHidden = display === 'none';

  if (!display || isHidden) {
    extraElement.style.display = 'block';
    buttonElement.textContent = 'LESS';
  } else {
    extraElement.style.display = 'none';
    buttonElement.textContent = 'MORE';
  }
}
