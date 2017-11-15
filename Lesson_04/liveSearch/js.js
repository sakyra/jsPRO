(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function(){ 
	var d = document,
		list = d.getElementById('list'),
		search = d.getElementById('search'),
		add = d.getElementById('add'),
		arrList = [],
		li = list.getElementsByTagName("li"),
		result = d.getElementById("result"),
		foundPos = "",
		pos = 0,
		count = 0;
	
	//Добавление страны в массив для поиска
	for(let i=0; i<li.length;i++) {
		arrList[i] = li[i].innerHTML;
	}
	
	search.oninput = function() {
		pos = 0;
		count = 0; //счётчик колличетсва найденых элементов
		result.innerHTML = "Найденно: <span>" + count + "</span>";
		for(let i=0; i<arrList.length; i++) {
			li[i].style.backgroundColor = "";
			li[i].style.borderColor = "";
			if(search.value == '') {
				li[i].style.backgroundColor = "";
				li[i].style.borderColor = "";
				result.innerHTML = "";
			} else {
				foundPos = arrList[i].indexOf(search.value, pos);
				if (foundPos !== -1) {
					li[i].style.backgroundColor = "#F3AE0F";
					li[i].style.borderColor = "#D77206"
					count++;
					result.innerHTML = "Найденно: <span>" + count + "</span>"; //показываю сколько найденно элементов
					//li[i].style.color = "red";
				} 			
			}			
		}
	};
	
	//Добавление нового элемента при нажатии на кнопку
	add.onclick = function() {
		if(search.value !== '') {
			let compar = false;
			for(let i=0; i<li.length;i++) {
				if(arrList[i] === search.value) {
					compar = true;
					break;
				}
				li[i].style.backgroundColor = ""; //Очистка бэкраунт и поиска
				li[i].style.borderColor = "";
			}
			if(!compar) {
				var newLi = d.createElement('li');
				newLi.innerHTML = search.value;
				list.appendChild(newLi);
				arrList[arrList.length] = search.value; //добавляю новый элемент в конец массива
				search.value = ""; //очистить Input	
				result.innerHTML = "";
				
			} else {
				alert("Такая страна уже есть!");
			}		
		} else {
			alert("Пустое поле!");
		}
	};
});

//Добавление нового элемента при нажатии на ENTER
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		add.onclick();
	}
});



})();












