(function() {
"use strict";
//localStorage
window.onload = function() {
	if(localStorage.getItem('bgcolor')!==null) {
		var color = localStorage.getItem('bgcolor');
		document.getElementsByTagName('body')[0].style.background = color;
	}

	document.getElementById('green').onclick = function() {
		document.getElementsByTagName('body')[0].style.background = 'green';
		localStorage.setItem('bgcolor','green');
	}
	
	document.getElementById('red').onclick = function() {
		document.getElementsByTagName('body')[0].style.background = 'red';
		localStorage.setItem('bgcolor','red');
	}
	
	document.getElementById('white').onclick = function() {
		document.getElementsByTagName('body')[0].style.background = 'white';
		localStorage.setItem('bgcolor','white');
	}	

//Cookie

	
	document.getElementById('setCook').onclick = function() {
		document.cookie = "info=123"
	}
	document.getElementById('getCook').onclick = function() {
		alert(document.cookie);
	}

}
})();
