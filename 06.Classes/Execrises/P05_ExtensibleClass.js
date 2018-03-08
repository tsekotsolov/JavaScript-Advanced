(function () {
  let id = 0;

  return class Extensible {

    constructor() {
      this.id++;
    }

    extend (template) {
      for (const key in template) {
        if (template.hasOwnProperty(key)) { //check to make sure that we iterate through object own keys, not the keys of it's prototype
          const element = template[key];
          if (typeof (element) === 'function') {
           Extensible.prototype[key] = element;
          } else {
            this[key] = element;
          }
        }
      }
    }
  
  }

})();