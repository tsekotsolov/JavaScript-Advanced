function solve(input = []) {

  let processString = function () {
    let text = '';

    return  (line) => {
      
      let rowOfData = line.split(' ');

      switch (rowOfData[0]) {
        case 'print':
          console.log(text);
          break;
        case 'append':
          text += rowOfData[1];
          break;
          case 'removeStart':
          text =text.slice(rowOfData[1]);
          break;
          case 'removeEnd':
          text = text.slice(0, - rowOfData[1]);
          break;

        default:
          break;
      }

    }

  }();

  for (const line of input) {
    processString(line);
  }

}


solve([
  'append hello',
  'append again',
  'removeStart 3',
  'removeEnd 4',
  'print'
])