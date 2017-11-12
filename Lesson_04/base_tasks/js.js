(function() {
"use strict";

//Задача 1 - Получить сумму кубов первых n натуральных чисел
function sumСubes(arr, n) {
	var arr_natural = [],
		result = 0;
	for(let i=0; i<arr.length; i++) {
		if((typeof arr[i] === "number") && (arr[i]>0) && (arr[i].toFixed() === arr[i])) {
			arr_natural.push(arr[i]);
		}
	}
	if(arr_natural.length < n) {
		return "Натуральных чисел в массиве меньше заявленых - " + n;
	} else {
		for(let i=0; i<n; i++) {
			result += Math.pow(arr_natural[i], 3);
		}
		return result;
	}
};
/* Задача 2 - Ввести строку, состоящую из нескольких слов, разделенных пробелами.
              Нарезать строку в массив по словам и вывести ее поэлементно – по
              одному слову в строке. */
function arrWords(str) {
	let strArr = str.split(" "),
		newLineStr = "";
	for(let i=0; i<strArr.length; i++) {
		newLineStr += strArr[i] + '\n';
	}
	console.log(newLineStr);
};

//Задача 3 - Создать массив из n случайных чисел от 0 до 10 вывести его
function arrRandom(n) {
	if(typeof n === "number") {
		let mass = [];
		for(let i=0; i<n; i++) {
			mass[i] = Math.floor(Math.random() * (10 + 1));
		}
		return alert(mass);
	} else {
		return alert('n - должно быть числом, а не вот это вот - "' + n +'"');
	}
};

//Задача 4 - Создать множество из n случайных чисел от 0 до 10 вывести его (использую MAP)
function arrRandomMap(n) {
    if(typeof n === "number") {
		let arr_map = new Map(),
			arr_res = '';
		for(let i=0; i<n; i++) {
			arr_map.set(i, Math.floor(Math.random() * (10 + 1)));
		}
        for(let elem of arr_map.values()) {
            arr_res += elem + " ";
        }
        return alert(arr_res);
	} else {
        return alert('n - должно быть числом, а не вот это вот - "' + n +'"');
    }
};
/* Задача 5 - Построить Треугольник Паскаля до n-й строки.
			  a. В обе стороны (возрастающей и нисходящей
			  b. Отцентрированный, а не прижатый к краю консоли. */

// возрастающий
function trnglPascalInc(rows) {
	let arrPascal = new Array();
	for(let i=0; i<rows; i++){
		arrPascal[i] = [i + 1];
		for(let j=0; j<=i; j++){
			if (j == 0 || j == i) {
				arrPascal[i][j] = 1;
			} else {
				arrPascal[i][j] = arrPascal[i - 1][j - 1] + arrPascal[i - 1][j];
			}
		}
	}
	return arrPascal;
};
// нисходящий
function trnglPascalDes(rows) {
    let arrPascal = new Array();
    for(let i=0; i<rows; i++){
        arrPascal[i] = [i + 1];
        for(let j=0; j<=i; j++){
            if (j == 0 || j == i) {
                arrPascal[i][j] = 1;
            } else {
                arrPascal[i][j] = arrPascal[i - 1][j - 1] + arrPascal[i - 1][j];
            }
        }
    }
    return arrPascal.reverse();
};
/*
/* Задача 7 - Получить на ввод количество рублей и копеек и вывести в правильной
			  форме в виде текста, например, три рубля, одиннадцать рублей
			  тридцать пять копеек, двадцать две копейки. */

function moneyConvert(numbMoney) {
	let moneyMass = [];
	let result = "";
    numbMoney = numbMoney/100;
    let strMoney = numbMoney + '';
    strMoney = strMoney.split(".");
	if(strMoney[0] == 1) {
        result = strMoney[0] + " рубль ";
	} else if(strMoney[0] > 1 && strMoney[0] < 5 ) {
        result = strMoney[0] + " рубля ";
	} else {
        result = strMoney[0] + " рублей ";
	}
	if(strMoney[1][0] == 0) {
        strMoney[1] = strMoney[1].substring(1);
	}
    if(strMoney[1] == 1) {
        result += strMoney[1] + " копейка";
    } else if(strMoney[1] > 1 && strMoney[1] < 5 ) {
        result += strMoney[1] + " копейки";
    } else {
        result += strMoney[1] + " копеек";
    }
	return result;
};

/* DOM version
document.addEventListener('DOMContentLoaded', function(){ 
	var d = document;
	var btn_addElem = d.getElementById('btn_addElem');
	var massBlock = d.getElementById('massBlock');
	var size_mass = d.getElementById('size_mass');
	var control_block = d.getElementById('control_block');
	var send = d.getElementById('send');

	function sumСubes(arr, n) {
		var arr_natural = [],
			result = 0;
		for(let i=0; i<arr.length; i++) {
			if((typeof arr[i] == "number") && (arr[i]>0) && (arr[i].toFixed() == arr[i])) {
				arr_natural.push(arr[i]);
			}
		}
		if(arr_natural.length < n) {
			return "Натуральных чисел в массиве меньше заявленых - " + n;
		} else {
			for(let i=0; i<n; i++) {
				result += Math.pow(arr_natural[i], 3);
			}
			return result;
		}
	}
	
	var clearElements = function() {
		massBlock.innerHTML = "";
		size_mass.className = "show";
		btn_addElem.className = "show";
		this.parentNode.removeChild(this);
	}	
	
    btn_addElem.onclick = function() {
		var sizeMass = size_mass.value;
		if(sizeMass !== "") {
			for(let i=0; i<sizeMass; i++) {
				massBlock.innerHTML += '<input class="smallInp">';
			}
			size_mass.className = "hide";
			btn_addElem.className = "hide";
			var btn_clear = d.createElement('button');
			btn_clear.id = 'clearArr';
			btn_clear.innerHTML += 'Удалить текущий массив';
			control_block.appendChild(btn_clear);
			var clearArr = d.getElementById('clearArr');
			clearArr.addEventListener('click', clearElements, false); //повесить функцию очистки текущего массива	
		} else {
			alert("Нужно ввести число!");
		}
    }

	send.onclick = function() {
		var smallInp = document.getElementsByClassName('smallInp');
		var arr = [];
		for(let i=0; i < smallInp.length; i++) {
			arr[i] = +smallInp[i].value;
			console.log(arr);
		}	
		var n = natural_size.value;	
		alert(sumСubes(arr, n));
	}
});
*/

})();












