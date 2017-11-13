(function() {
"use strict";

/* ------------------------------- МАССИВЫ ------------------------------- */

//ЗАДАЧА 1 - Получить сумму кубов первых n натуральных чисел
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


/* ЗАДАЧА 2 - Ввести строку, состоящую из нескольких слов, разделенных пробелами.
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



//ЗАДАЧА 3 - Создать массив из n случайных чисел от 0 до 10 вывести его
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



//ЗАДАЧА 4 - Создать множество из n случайных чисел от 0 до 10 вывести его (использую MAP)
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



/* ЗАДАЧА 5 - Построить Треугольник Паскаля до n-й строки.
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


/* ЗАДАЧА 6 - Колхозница привезла на рынок для продажи корзину яиц. Продавала
			  она их по одной и той же цене. После продажи колхозница пожелала
			  проверить, верно ли она получала деньги. Но вот беда: она забыла,
			  сколько у нее было яиц. Вспомнила она только, что когда
			  перекладывала яйца по 2, то оставалось одно яйцо; одно яйцо
			  оставалось также при перекладывании яиц по 3, по 4, по 5 и по 6. Когда
			  же она перекладывала яйца по 7, то не оставалось ни одного.
		      Помоги колхознице сообразить, сколько у нее было яиц. */
			  
function farmerAndHerEggs() {
	let eggs = 7;
	while (!(eggs%7 === 0 && eggs%2 === 1 && eggs%3 === 1 && eggs%4 === 1 && eggs%5 === 1 && eggs%6 === 1)) {
		eggs+=7;
	}
	return alert("У колхознице было " + eggs + " яиц");
}



/* ЗАДАЧА 7 - Получить на ввод количество рублей и копеек и вывести в правильной
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



/* ЗАДАЧА 8 - Заданы день и месяц рождения, а также текущие день
			  Определить, сколько дней осталось до дня рождения. */		  
function birthDay() {
	var month = +prompt("Введите месяц рождения (чило)");
	var day = +prompt("Введите день рождения (чило)");
	if((month == "" || day == "") || (month == null || day == null) || (month == undefined || day == undefined)) {
		return "Где-то Вы ввели пустое значение... ";
	} else if (isNaN(month) || isNaN(day)) {
		return "Где-то Вы ввели не числовое значение... ";
	} else if(month < 1 || month > 12) {
		return "Месяц должен быть числом от 1 до 12";
	} else {
		month = month+'';
		day = day+'';
		if(month.length >= 3 || day.length >= 3) {
			return "Недопустипая длина (уж слишком длинноооо)... ";
		} else {
			var limit_day = false;
			if(month == 1 || month == 3 || month == 5 || month === 7 || month == 8 || month == 10 || month == 12) {
				limit_day = (day>0 && day <= 31) ? true : false;
			} else if (month == 4 || month == 6 || month == 9 || month == 11) {
				limit_day = (day>0 && day <= 30) ? true : false;
			} else if (month == 2) {
				limit_day = (day>0 && day <= 28) ? true : false;
			} 
			if (limit_day) {
				var nowDate = new Date();
				if((nowDate.getMonth()-1 <= month) && (nowDate.getDate() <= day)) {
					var year = nowDate.getFullYear();
				} else {
					var year = nowDate.getFullYear()+1;
				}
				your_data = year +'.'+ month +'.'+ day;
				var your_data = new Date(your_data);
				var result = Math.round((your_data.getTime()-nowDate.getTime()) / (1000*60*60*24));
				if(result == -1) {
					return "У вас сегодня ДР!";
				} else {
					return "Дней до Вашего ДР осталось: " + result;	
				}
			} else {
				return "Недопустимый дневной деапозон месяца";
			}
		}
	}		
}


/* ------------------------------- ОБЪЕКТЫ ------------------------------- */

/* ЗАДАЧА 1 - Сравнить два объекта:
				a. С учётом «ключей» и значений свойств
				b. Без учёта «ключей» 
				c. Без учёта порядка значений свойств объекта */

				
var obj = {
	age: 22,
    aaa: 55,
	name: 55

};
var obj2 = {
	age: 22,
	nassme: "John",
    aaa: 55
};
var obj3 = {
	age: 22,
	'id': "5",
	name: "John"
};

// version A и С
function comparisonObjectsA(obj, obj2) {
	let res = "";
	if(Object.keys(obj).length === Object.keys(obj2).length) {
        for(let key in obj) {
            for(let key2 in obj2) {
                if (key === key2) {
                    if(obj[key] !== obj2[key2]) {
                        res += " по ключу " + key + ' объекты не равны!'+' \n';
                    }
                }
            }
        }
        if (res == "") {
            res = "Объекты одинаковые";
        } else {
            res += "Поэтому эти обеъекты НЕ равны!";
        }
    } else {
	    res = "Эти объеты разной длины, они не могут быть одинаковыми!";
    }
	return res;
}

function comparisonObjectsB(obj, obj2) {
	let res = "";
    let prop_obj = "";
    let bool = false;
    if (Object.keys(obj).length !== Object.keys(obj2).length) {
        res = "Эти объеты разной длины, они не могут быть одинаковыми!";
    } else {
        for (let key in obj) {
            prop_obj = obj[key];
            for (let key2 in obj2) {
                if (prop_obj !== obj2[key2] ) {
                    bool = false;
                } else if (obj2[key2] === prop_obj)  {
                    bool = true;
                    break;
                }

            }

            if(bool === false) {
               res += 'Во втором объекте нет свойства ' + prop_obj + ' \n';
            }

        }
        if (res == "") {
            res = "Объекты одинаковые";
        } else {
            res += "Поэтому эти обеъекты НЕ равны!";
        }
    }
	return res;
}


console.log(comparisonObjectsA(obj, obj2));
				
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












