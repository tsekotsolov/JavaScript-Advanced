function formatCurrency(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + ' ' + result;
  else return result + ' ' + symbol;
}

function dollarFormatter(formatCurrency) {
  return function (value) {
    return formatCurrency(',', '$', true, value);
  };

}

let dollars = dollarFormatter(formatCurrency);
console.log(dollars(5345));


// simple curry function expample

function myCurry(a,b) {
  return function (c) {
    return a + b + c;
  }
}

let currySum = myCurry(5,6);
console.log(currySum(1));
console.log(currySum(3));