function largestNumFromArr(arr) {
  var maxNumArray = [];
  for (var i = 0; i < arr.length; i++) {
    var nekiArr = arr[i];

    if (nekiArr !== []) 
    var najveciNeki = nekiArr[0];
    for (var j = 0; j < nekiArr.length; j++) {
      if (nekiArr[j] > najveciNeki) najveciNeki = nekiArr[j];
    }

    maxNumArray.push(najveciNeki);
  }
  return maxNumArray;
}
console.log(
  largestNumFromArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestNumFromArr([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
console.log(
  largestNumFromArr([
    [23, 25, 12],
    [25, 7, 34, 48],
    [4, 10, 18, 21],
    [72, 3, 17, 10],
  ])
);

module.exports = largestNumFromArr;
