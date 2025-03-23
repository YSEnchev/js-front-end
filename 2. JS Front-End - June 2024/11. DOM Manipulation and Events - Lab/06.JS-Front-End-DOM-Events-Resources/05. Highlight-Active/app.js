function focused() {
  const inputElement = document.querySelectorAll('input[type=text]');

  inputElement.forEach((el) =>
    el.addEventListener('focus', (e) => {
      e.currentTarget.parentElement.classList.add('focused'); // на текущия таргет "nputElement" взимаме неговия родител и добавяме фокус когато фокусираме
    })
  );

  inputElement.forEach((el) =>
    el.addEventListener('blur', (e) => {
      e.currentTarget.parentElement.classList.remove('focused');
    })
  );
}
