let arr = [3, 7, 8, 13, 15, 21, 44, 33, 6, 8, 55, 13, 77, 0]

let result = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		return false;
	} else {
		return true;
	}
});

let result2 = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});
console.log(arr)
console.log(result.length);
console.log(result2.length);