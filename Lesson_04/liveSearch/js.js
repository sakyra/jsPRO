(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function(){ 
	var d = document,
		list = d.getElementById('list'),
		search = d.getElementById('search'),
		add = d.getElementById('add'),
		arrList = [],
		arrListSmall = [],
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
		var find_text = "",
			newText = "",
			newTextSpan = "",
			withSpanDom = "",
			endText = " элементов"
		pos = 0;
		count = 0; //счётчик колличетсва найденых элементов
		result.innerHTML = "Найденно: <span>" + count + "</span>" + endText;
		var search_text = search.value.toLowerCase();
		for(let i=0; i<arrList.length; i++) {
			li[i].style.backgroundColor = "";
			li[i].style.borderColor = "";
			if(search_text == '') {
				li[i].style.backgroundColor = "";
				li[i].style.borderColor = "";
				result.innerHTML = "";
				li[i].innerHTML = arrList[i]; //убрать span-ы
			} else {
				foundPos = arrList[i].toLowerCase().indexOf(search_text, pos);
				if (foundPos !== -1) {
					li[i].style.backgroundColor = "#F3AE0F";
					li[i].style.borderColor = "#D77206";
					
					//Проверка сколько найдено элементов и выводить соотвествующее окончание
					count++;
					if(count===1) {
						endText = " элемент";
					} else if (count>1 &&count<5) {
						endText = " элемента";
					} else {
						endText = " элементов";
					}
					result.innerHTML = "Найденно: <span>" + count + "</span>" + endText; //показываю сколько найденно элементов
					
					//подсветка искаемых букв
					newText = arrList[i].substr(foundPos, search_text.length);
					newTextSpan = "<span>" + newText + "</span>";
					withSpanDom = arrList[i].replace(newText, newTextSpan);
					li[i].innerHTML = withSpanDom;
				} else {
					li[i].innerHTML = arrList[i];
				}			
			}			
		}
	};
	
	//Добавление нового элемента при нажатии на кнопку
	add.onclick = function() {
		if(search.value !== '') {
			let compar = false;
			for(let i=0; i<li.length;i++) {
				if(arrList[i].toLowerCase() === search.value) {
					compar = true;
					break;
				}
				//li[i].style.backgroundColor = ""; //Очистка фона и поиска
				//li[i].style.borderColor = "";
				//li[i].innerHTML = arrList[i]; //убрать span-ы
			}
			if(!compar) {
				var newLi = d.createElement('li');
				newLi.innerHTML = search.value;
				list.appendChild(newLi);
				arrList[arrList.length] = search.value; //добавляю новый элемент в конец массива
				search.value = ""; //очистить input	
				for(let i=0; i<li.length;i++) {
					li[i].style.backgroundColor = ""; //Очистка фона и поиска
					li[i].style.borderColor = "";
					li[i].innerHTML = arrList[i]; //убрать span-ы
				}	
				result.innerHTML = "";
				
				
			} else {
				alert("Такая запись уже есть!");
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












