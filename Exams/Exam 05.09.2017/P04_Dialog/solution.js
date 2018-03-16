class Dialog {

  constructor(text, callback) {
    this.text = text;
    this.callback = callback;
    this.inputContainer = [];
  }

  addInput(label, name, type) {

    let labelTag = $(`<label>${label}</label>`);
    let input = $(`<input name="${name}" type="${type}">`);

    this.inputContainer.push(input.add(labelTag));

  }

  render() {
    let container = $('body');

    let overlay = $('<div class="overlay">');
    let dialog = $('<div class="dialog">');
    let paragraph = $(`<p>${this.text}</p>`);
    let okBtn = $('<button>OK</button>');
    let cancelBtn = $('<button>Cancel</button>');

    dialog.append(paragraph);


    if (this.inputContainer !== undefined) {

      for (let i = 0; i < this.inputContainer.length; i++) {
        let label = this.inputContainer[i][1];
        let input = this.inputContainer[i][0];
        dialog.append(label).append(input)

      }

    }

    dialog.append(okBtn).append(cancelBtn);
    overlay.append(dialog);
    container.append(overlay);

    let okFunction = () => {
      
      let obj = {};
      let allInputs = $('input');

      for (const input of allInputs.toArray()) {

        obj[$(input).attr('name')] = $(input).val();
        
      }

      this.callback(obj);
      overlay.remove();

    }

    okBtn.click(() => {
      okFunction();
    });

    cancelBtn.click(() => {
      overlay.remove();
    });
  }

}