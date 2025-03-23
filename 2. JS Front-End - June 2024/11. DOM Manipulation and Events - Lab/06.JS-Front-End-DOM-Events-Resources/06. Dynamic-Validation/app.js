function validate() {
  const emailInputElement = document.getElementById('email');
  const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

  emailInputElement.addEventListener('change', (e) => {
    //FIRST SOLUTION
    // if (pattern.test(e.currentTarget.value)) {
    //   e.currentTarget.classList.remove('error');
    // } else {
    //   e.currentTarget.classList.add('error');
    // }

    //SECOND SOLUTION
    if (!pattern.test(e.currentTarget.value)) {
      return e.currentTarget.classList.add('error');
    }
    e.currentTarget.classList.remove('error');
  });
}
