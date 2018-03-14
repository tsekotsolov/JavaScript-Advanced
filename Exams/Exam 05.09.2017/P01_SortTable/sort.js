function sort(colIndex, order) {

  let rows = $('tbody > tr');

  if (colIndex === 0) {

    if (order === false)

      rows.sort((a, b) => {

        let aProduct = (a.children[0].textContent);
        let bProduct = (b.children[0].textContent);

        return aProduct.localeCompare(bProduct);

      })
    else {
      rows.sort((a, b) => {

        let aProduct = (a.children[0].textContent);
        let bProduct = (b.children[0].textContent);

        return bProduct.localeCompare(aProduct);

      })
    }

  } else if (colIndex === 1) {

    if (order === false) {
      rows.sort((a, b) => {

        let aPrice = Number(a.children[1].textContent);
        let bPrice = Number(b.children[1].textContent);

        return aPrice - bPrice

      })
    } else {
      rows.sort((a, b) => {

        let aPrice = Number(a.children[1].textContent);
        let bPrice = Number(b.children[1].textContent);
        return bPrice - aPrice

      });

    }
  }
  $('tbody').append(rows);
}