let arr = [3, 7, 8, 13, 15, 21, 25, 33, 37, 54, 55, 61, 77]
  console.log(arr.length)
  
let result = arr.map(function(item, index, array) {
  return item + 7
});
  console.log(arr);
  console.log(result)