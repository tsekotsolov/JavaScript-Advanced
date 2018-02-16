function attachEventsListeners() {

  let buttons = document.querySelectorAll('div input:nth-child(3)');


  for (const button of buttons) {
    button.addEventListener('click', calc);
  }

  let dayObject = {

    'days': 1,
    'hours': 24,
    'minutes': 1440,
    'seconds': 86400
  }

  function calc(event) {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    if (this.id === 'daysBtn') {
      days = document.getElementById('days').value
      hours.value = Number(days) * 24;
      minutes.value = Number(days) * 1440;
      seconds.value = Number(days) * 86400;
    } else if (this.id === 'hoursBtn') {

      hours = document.getElementById('hours').value;
      days.value = hours / 24;

    }

  }


}