function task1() {
	var name = 'Кирилл';
	var task1 = document.getElementById("task1");
	task1.innerHTML = "name = " + name;
}

function task2() {
	const yoB = 2002;
	var task2 = document.getElementById("task2");
	task2.innerHTML = "Год рождения = " + yoB;
}


function greetings(name) {
	var el = document.getElementById("task3");
	el.innerHTML = "Привет, " + name + "!";
}

function range(arr, start, end) {
	var res_arr = [];
	for (var j = start; j < end; j++)
		res_arr.push(arr[j]);
	return res_arr;
}

function print_range() {
	var start = 15;
	var end = 30;
	var arr = [];
	for (var i = 0; i < end; i++)
		arr.push(i);

	var task4 = document.getElementById("task4");
	task4.innerHTML = "Исходный массив: " + arr.join(", ");


	task4.innerHTML += "<br>Итог: " + range(arr, start, end).join(", ");
}

function rangeOdd(arr, start, end) {
	var res_arr = [];
	for (var j = start; j < end; j++)
		if (arr[j] % 2 == 1)
			res_arr.push(arr[j]);
	return res_arr;
}

function print_rangeOdd() {
	var start = 15;
	var end = 30;
	var arr = [];
	for (var i = 0; i < end; i++)
		arr.push(i);

	var task5 = document.getElementById("task5");
	task5.innerHTML = "Исходный массив: " + arr.join(", ");

	task5.innerHTML += "<br>Итог: " + rangeOdd(arr, start, end).join(", ");
}

function average(a, b) {
	return (a+b)/2;
}

function print_average() {
	var a = 15;
	var b = 30;
	var task6 = document.getElementById("task6");
	task6.innerHTML += "Среднее: " + average(a, b);
}

function average(a, b) {
	return (a+b)/2;
}

function print_average() {
	var a = 15;
	var b = 30;
	var task6 = document.getElementById("task6");
	task6.innerHTML += "Среднее: " + average(a, b);
}

function square(x) {
	return x*x;
}

function print_square() {
	var x = 15;
	var task7 = document.getElementById("task7");
	task7.innerHTML += "Квадрат: " + square(x);
}

function cube(x) {
	return x*x*x;
}

function print_cube() {
	var x = 15;
	var task8 = document.getElementById("task8");
	task8.innerHTML += "Куб: " + cube(x);
}

function calculate() {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		var square_i = square(i);
		var cube_i = cube(i);
		var av = average(square_i, cube_i);
		arr.push(av);
	}
	return arr;
}

function print_task9() {
	var task9 = document.getElementById("task9");
	task9.innerHTML += "Итоговый массив: " + calculate();
}