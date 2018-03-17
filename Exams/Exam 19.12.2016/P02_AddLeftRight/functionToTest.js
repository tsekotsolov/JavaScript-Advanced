function makeList() {
  let data = [];
  return {
    addLeft: function (item) {
      data.unshift(item);
    },
    addRight: function (item) {
      data.push(item);
    },
    clear: function () {
      data = [];
    },
    toString: function () {
      return data.join(", ");
    }
  };
}
module.exports = makeList;

let list = makeList();
list.addLeft(7);
      list.addLeft("gogo");
      list.addLeft([57,54,78])

console.log(list.toString());
