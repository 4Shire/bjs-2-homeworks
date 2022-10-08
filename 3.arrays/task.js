function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);  

  return result; 
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(e => e > 0).filter(e => e % 3 ===0).map(item => (item * 10));

  return resultArr; 
}
