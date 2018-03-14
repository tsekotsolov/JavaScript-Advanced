function sort(colIndex, order) {

  let rows = $('tbody > tr');
  let prices = $('tr td:last-child');
  let products = $('tr td:first-child');

  console.log(rows);

  if (colIndex === 0) {

    if (order === false)

      rows.sort((a, b) => {

        let x = a;
        console.log(x)
        
        
      })

      console.log();
  } else {

  }

}