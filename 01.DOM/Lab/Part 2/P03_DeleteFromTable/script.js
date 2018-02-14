function deleteByEmail() {

    let userInput = document.getElementsByName('email')[0].value;

    let emailsArr = document.querySelectorAll('tr td:nth-child(2)')

    for (const mail of emailsArr) {

        if (userInput === mail.textContent) {
            mail.parentNode.parentNode.removeChild(mail.parentNode)
            document.getElementsByName('email')[0].value = '';

            document.getElementById('result').textContent='Deleted.'
            return
        }
    }

    document.getElementById('result').textContent='Not found.';
}