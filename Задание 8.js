let figure = new Map([
  ["круг", "0 углов"],
  ["овал", "0 углов"],
  ["треугольник", "3 угла"],
  ["квадрат", "4 угла"],
  ["ромб", "4 угла"],
  ["многоугольник", "5 и более углов"]  
]);

figure.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`); 
});


/*for (let name of figure.keys()) {
  console.log(`Ключ — ${name}`);
}

for (let corner of figure.values()) {
  console.log(`Значение — ${corner}`); 
}*/