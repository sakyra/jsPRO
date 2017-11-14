(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function(){ 
	var d = document,
	list = d.getElementById('list'),
	search = d.getElementById('search'),
	add = d.getElementById('add');
	var arrList = [];
	var li = list.getElementsByTagName("li");
	var result = list.getElementsByTagName("result");
	var foundPos = "";
	
	
	for(let i=0; i<li.length;i++) {
		arrList[i] = li[i].innerHTML;
	}

	
	

	search.oninput = function() {
		for(let i=0; i<arrList.length; i++) {
		/*
			var pos = 0;
			while(true) {
			  foundPos = arrList[i].indexOf(search.value, pos);
			  if (foundPos == -1) break;
			  
				console.log("позиция: " + foundPos + "элемент: " + arrList[i]); // нашли на этой позиции
				pos = foundPos + 1; // продолжить поиск со следующей
			}		
			
				*/
		}	
	
	};
/*	
	
*/		


});

})();












