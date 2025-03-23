function validate() {
  const emailInputElement = document.getElementById('email');

  emailInputElement.addEventListener('change', (e) => {
    console.log(e.currentTarget.value);
  });
}
