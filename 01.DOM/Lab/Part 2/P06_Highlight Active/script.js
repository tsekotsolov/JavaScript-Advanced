function focus() {
    let allInputs = document.getElementsByTagName('input');
    let inputsArr = [...allInputs];

    for (let i = 0; i < inputsArr.length; i++) {
        inputsArr[i].addEventListener('focus', highlight);
        inputsArr[i].addEventListener('blur', downlight);
    }

    function highlight(event) {

        this.parentNode.className = 'focused';
    }

    function downlight(event) {
        this.parentNode.removeAttribute('class')
    }

}