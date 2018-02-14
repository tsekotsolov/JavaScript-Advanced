function validate() {

  document.getElementById('email').addEventListener('change', onChange);
  let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

  function onChange(event) {
    if (!regex.test(event.target.value))
      this.className = 'error';
    else
      this.removeAttribute('class');
  }
}
