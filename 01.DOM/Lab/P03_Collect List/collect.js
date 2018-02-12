function extractText() {

    let ulchildren =document.querySelectorAll("li");
    let textarea = document.querySelector("#result");

    for (const li of ulchildren) {
        textarea.value += li.textContent + '\n';
    }

}