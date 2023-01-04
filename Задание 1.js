const result = +prompt('Введите число')
if (typeof result !== 'number') {
  alert('Упс, кажется, вы ошиблись');
} else if (result % 2 === 0) {
  alert('Четное число');
} else if (isNaN(result)) {
  alert('Упс, кажется, вы ошиблись');
} else {
  alert('Нечетное число');
}