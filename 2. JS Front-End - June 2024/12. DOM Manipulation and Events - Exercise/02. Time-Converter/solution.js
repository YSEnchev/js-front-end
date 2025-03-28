function attachEventsListeners() {
  const secondsToMinutes = (seconds) => seconds / 60;
  const secondsToHours = (seconds) => secondsToMinutes(seconds) / 60;
  const secondsToDays = (seconds) => secondsToHours(seconds) / 24;

  const minutesToSeconds = (minutes) => minutes * 60;
  const minutesToHours = (minutes) => minutes / 60;
  const minutesToDays = (minutes) => minutesToHours(minutes) / 24;

  const hoursToSeconds = (hours) => hours * 60 * 60;
  const hoursToMinutes = (hours) => hours * 60;
  const hoursToDays = (hours) => hours / 24;

  const daysToSeconds = (days) => days * 24 * 60 * 60;
  const daysToMinutes = (days) => days * 24 * 60;
  const daysToHours = (days) => days * 24;

  function onClickHandler(event) {
    const rawId = event.target.getAttribute('id');
    const inputId = rawId.replace('Btn', '');

    const inputElement = document.querySelector(`input#${inputId}`);

    switch (inputId) {
      case 'seconds':
        {
          document.getElementById('days').value = secondsToDays(
            inputElement.value
          );
          document.getElementById('hours').value = secondsToHours(
            inputElement.value
          );
          document.getElementById('minutes').value = secondsToMinutes(
            inputElement.value
          );
        }
        break;

      case 'minutes':
        {
          document.getElementById('days').value = minutesToDays(
            inputElement.value
          );
          document.getElementById('hours').value = minutesToHours(
            inputElement.value
          );
          document.getElementById('seconds').value = minutesToSeconds(
            inputElement.value
          );
        }
        break;

      case 'hours':
        {
          document.getElementById('days').value = hoursToDays(
            inputElement.value
          );
          document.getElementById('minutes').value = hoursToMinutes(
            inputElement.value
          );
          document.getElementById('seconds').value = hoursToSeconds(
            inputElement.value
          );
        }
        break;

      case 'days':
        {
          document.getElementById('hours').value = daysToHours(
            inputElement.value
          );
          document.getElementById('minutes').value = daysToMinutes(
            inputElement.value
          );
          document.getElementById('seconds').value = daysToSeconds(
            inputElement.value
          );
        }
        break;
    }
  }

  document.querySelectorAll("input[type='button']").forEach((buttonElement) => {
    buttonElement.addEventListener('click', onClickHandler);
  });
}
