function attachGradientEvents() {

    let box = document.getElementById('gradient');
    box.addEventListener('mousemove', printCoordinates)
    box.addEventListener('mouseout', boxOut)


    function printCoordinates(event) {
        let xPosition = event.offsetX;
        let totalWidth = this.clientWidth - 1;
        let percentage = Math.trunc(xPosition / totalWidth * 100);
        document.getElementById('result').textContent = percentage + '%';
    }

    function boxOut(event) {
        document.getElementById('result').textContent = ''
    }

}