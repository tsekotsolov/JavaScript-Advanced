function sort(array,order){

if (order === "asc") {
  return(array.sort((a,b)=>a-b));
}
else{
  return(array.sort((a,b)=>b-a));
}

}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');
