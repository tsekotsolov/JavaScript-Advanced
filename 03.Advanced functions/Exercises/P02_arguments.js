function args (){

  let container = new Map();

  for (const value of arguments) {
    
    console.log(`${typeof(value)} : ${value}`);
  
  }

}

args('cat', 42, function () { console.log('Hello world!')});