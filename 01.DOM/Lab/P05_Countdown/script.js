function countdown(startTime) {
  let time = startTime;
  let box = document.getElementById('time');
  let intervalID = setInterval(decrease, 1000);

  function decrease() {
    time--;
    box.value = Math.trunc(time / 60) + ':' + ("0" + (time % 60))
    .slice(-2);
    console.log(box.value);
  }
}

