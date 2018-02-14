function validate() {

  document.getElementById('email').addEventListener('change', onType);
  let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

  function onType(event) {
    if (!regex.test(event.target.value))
      this.className = 'error';
    else
      this.removeAttribute('class');
  }
}
