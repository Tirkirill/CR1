function task1() {
	let name = 'Кирилл';
	let task1 = document.getElementById("task1");
	task1.innerHTML = "name = " + name;
}

function task2() {
	const yoB = 2002;
	let task2 = document.getElementById("task2");
	task2.innerHTML = "Год рождения = " + yoB;
}


function greetings(name) {
	let el = document.getElementById("task3");
	el.innerHTML = "Привет, " + name + "!";
}

function range(arr, start, end) {
	let res_arr = [];
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] <= end && arr[j] >= start)
			res_arr.push(arr[j]);
	}
	return res_arr;
}

function print_range() {
	let start = 15;
	let end = 30;
	let arr = [];
	for (let i = 15; i < 60; i++)
		arr.push(i);

	let task4 = document.getElementById("task4");
	task4.innerHTML = "Исходный массив: " + arr.join(", ");
	task4.innerHTML += "<br>Итог: " + range(arr, start, end).join(", ");
}

function rangeOdd(arr, start, end) {
	let res_arr = [];
	for (let j = 0; j < arr.length; j++)
		if (arr[j] % 2 == 1 && arr[j] >= start && arr[j] <= end)
			res_arr.push(arr[j]);
	return res_arr;
}

function print_rangeOdd() {
	let start = 15;
	let end = 30;
	let arr = [];
	for (let i = 15; i < 60; i++)
		arr.push(i);

	let task5 = document.getElementById("task5");
	task5.innerHTML = "Исходный массив: " + arr.join(", ");

	task5.innerHTML += "<br>Итог: " + rangeOdd(arr, start, end).join(", ");
}

function print_average() {
	let a = 15;
	let b = 30;
	let task6 = document.getElementById("task6");
	task6.innerHTML += "Среднее: " + average(a, b);
}

function average(a, b) {
	return (a+b)/2;
}

function square(x) {
	return x*x;
}

function print_square() {
	let x = 15;
	let task7 = document.getElementById("task7");
	task7.innerHTML += "Квадрат: " + square(x);
}

function cube(x) {
	return x*x*x;
}

function print_cube() {
	let x = 15;
	let task8 = document.getElementById("task8");
	task8.innerHTML += "Куб: " + cube(x);
}

function calculate() {
	let arr = [];
	for (var i = 0; i < 10; i++) {
		var square_i = square(i);
		var cube_i = cube(i);
		var av = average(square_i, cube_i);
		arr.push(av);
	}
	return arr;
}

function print_task9() {
	let task9 = document.getElementById("task9");
	task9.innerHTML += "Итоговый массив: " + calculate();
}