//Задание 1.

/*const result = +prompt('Введите число')
if (typeof result !== 'number') {
  alert('Упс, кажется, вы ошиблись');
} else if (result % 2 === 0) {
  alert('Четное число');
} else if (isNaN(result)) {
  alert('Упс, кажется, вы ошиблись');
} else {
  alert('Нечетное число');
}*/


//Задание 2.

/*let x = 4;
if (typeof x === 'number') {
  console.log('x = числу');
} else if (typeof x === 'string') {
  console.log('x = строке');
} else if (typeof x === true === false) {
  console.log('x = логическому числу');
} else {
  console.log('Тип x не определён');
}*/


// Задание 3. 

/*let str= 'Hello';
let massiv = [...str]
console.log (massiv.reverse().join("") );*/


//Задание 4. 

/*function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(101));*/

//Задание 5. 

/*let arr = [3, 7, 8, 13, 15, 21, 25, 33, 37, 54, 55, 61, 77]
  console.log(arr.length)
  
let result = arr.map(function(item, index, array) {
  return item + 7
});
  console.log(arr);
  console.log(result)*/

//Задание 6. Не поняла, что конкретно нужно было 

/*let arr = [3, 7, 8, 13, 15, 21, 44, 33, 6, 8, 55, 13, 77, 0]
let arr = [3, 7, 8, 13, 15, 21, 77, 33, 37, 8, 21, 13, 77]
let ks=[];
for(var value of arr){
    ks[value] = (ks[value]||0)+1;
}
let arr2 =[];
for(var i in arr) {
  if ( ks[ arr[i] ] > 1 ) {
        arr2.push(arr[i]);
        ks[ arr[i] ] = 0;
    }
}
 
console.log(arr2);*/



//Задание 7.

/*let arr = [3, 7, 8, 13, 15, 21, 44, 33, 6, 8, 55, 13, 77, 0]

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
console.log(result2.length);*/


//Задание 8.

/*let figure = new Map([
  ["круг", "0 углов"],
  ["овал", "0 углов"],
  ["треугольник", "3 угла"],
  ["квадрат", "4 угла"],
  ["ромб", "4 угла"],
  ["многоугольник", "5 и более углов"]  
]);

figure.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`); 
});*/


/*for (let name of figure.keys()) {
  console.log(`Ключ — ${name}`);
}

for (let corner of figure.values()) {
  console.log(`Значение — ${corner}`); 
}*/