function validateLogin(input) {
  const username = input[0];
  const attempts = input.slice(1);
  const correctPassword = username.split('').reverse().join('');

  for (let i = 0; i < attempts.length; i++) {
    if (i === 3 && attempts[i] !== correctPassword) {
      return `User ${username} blocked!`;
    }

    if (attempts[i] === correctPassword) {
      return `User ${username} logged in.`;
    }

    if (attempts[i] !== correctPassword && i < 3) {
      console.log('Incorrect password. Try again.');
    }
  }
}

console.log(validateLogin(['Acer', 'login', 'go', 'let me in', 'recA']));
