function stopwatch() {

    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');

    startButton.addEventListener('click', startTimer)
    stopButton.addEventListener('click', stopTimer)
    let div = document.getElementById('time');
    let start = null;

    function startTimer(event) {

        div.textContent = '00:00'
        startButton.disabled = true;
        stopButton.disabled = false;
        let time = 0;
        start = setInterval(startCounter, 1000);


        function startCounter() {
            time++;
            div.textContent = ("0" + Math.trunc(time / 60)).slice(-2) + ':' + ("0" + (time % 60))
                .slice(-2);
        }

    }

    function stopTimer(event) {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(start);
    }
}