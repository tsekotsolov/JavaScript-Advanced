function listBuilder(selector) {

  let freshUl;
  return {

    createNewList: function () {

      let container = $(selector);
      container.empty();
      freshUl = $('<ul>');
      container.append(freshUl);
    },

    addItem: function (value) {

      let li = $('<li>');
      li.text(value);
      let upBtn = $('<button>Up</button>');
      let downBtn = $('<button>Down</button>');
      li.append(upBtn).append(downBtn);
      freshUl.append(li);

      upBtn.click(() => {

        li.first().prev().before(li)
      })

      downBtn.click(() => {
        li.last().next().after(li);
      })
    }
  }
}