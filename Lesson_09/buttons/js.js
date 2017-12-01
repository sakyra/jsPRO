(function() {
//"use strict";

document.addEventListener('DOMContentLoaded', function(){ 
	var btn_a = document.getElementById('btn_a');
	var btn_b = document.getElementById('btn_b');
	var btn_c = document.getElementById('btn_c');
	var resetBtn = document.getElementById('resetBtn');
	var resetBtnC = document.getElementById('resetBtnC');
	var resetInp = document.getElementById('resetInp');
	var clearTxt = document.getElementById('clearTxt');
	var clearTxtC = document.getElementById('clearTxtC');
	var minInp = document.getElementById('minInp');
	var secInp = document.getElementById('secInp');
	var localStA;
	var localStB;
	var localStC;
	var ClsNameA;
	var ClsNameB;
	var ClsNameC;
	function toogle(self) {
		if(self.innerHTML == "ON") {
			self.innerHTML = "OFF";
			self.classList.add("off");
		} else {
			self.innerHTML = "ON";	
			self.classList.remove("off");
		}
	}
	
//Функция тикания часов кнопки С 
	function tick(minVal, secVal) {
		if((secVal !== '') && (minVal.length <= 2) && (secVal.length <= 2) && (minVal.length != 1) && (secVal.length != 1)) {
			btn_c.disabled = true;
			btn_c.classList.add("disabled");
			var min = +minVal;
			console.log(typeof min);
			if (min<10) min = '0' + min;
			var sec = +secVal;
			if(sec<10)sec = '0' + sec;	

			var timerId = setInterval(function() {
				if(sec == '00' && min == '00') {
					btn_c.innerHTML = "OFF";	
					btn_c.classList.add("off");
					btn_c.disabled = false;
					btn_c.classList.remove("disabled");
					localStorage.removeItem('min');
					localStorage.removeItem('sec');
					clearTimeout(timerId);

				} else {
					if(sec == 00) {
						sec = 59;
						if(min<=10) {
							min--;
							min = '0' + min;
						} else {
							min--;
						}
					}
					if(sec<=10) {
						sec--;
						sec = '0' + sec;
					} else {
						sec--;
					}				
					clearTxtC.innerHTML = "Кнопка сброситься через: <b>"+min+":"+sec+"</b>";
					localStorage.setItem('min', min);
					localStorage.setItem('sec', sec);					
				}
			}, 1000);		
		} else {
			alert("Нужно вводить двухзначное число в каждое поле!");
		}	
		

	}		
	

	btn_a.addEventListener( "click" , function() {
		toogle(this);
		//запись localStorage для кнопки A
		localStA = this.innerHTML;
		localStorage.setItem('innerHTML-a', localStA);
		ClsNameA = this.getAttributeNode('class');
		ClsNameA = ClsNameA.value;
		localStorage.setItem('classList-a', ClsNameA);

	});

	btn_b.addEventListener( "click" , function() {
		toogle(this);
		//запись localStorage для кнопки B
		localStB = this.innerHTML;
		localStorage.setItem('innerHTML-b', localStB);
		ClsNameB = this.getAttributeNode('class');
		ClsNameB = ClsNameB.value;
		localStorage.setItem('classList-b', ClsNameB);
	});

	btn_c.addEventListener( "click" , function() {
		toogle(this);
		//запись localStorage для кнопки C
		localStC = this.innerHTML;
		localStorage.setItem('innerHTML-c', localStC);
		ClsNameC = this.getAttributeNode('class');
		ClsNameC = ClsNameC.value;
		localStorage.setItem('classList-c', ClsNameC);
	});

	resetBtn.addEventListener( "click" , function() {
		if(resetInp.value !== '') {
			let resetInpVal = resetInp.value;
			let resetInpValRender = resetInpVal*1000;
			clearTxt.innerHTML = "Кнопка сброситься через: <b>" + resetInpVal + "</b> сек";
			setTimeout(function() {
				btn_b.innerHTML = "OFF";	
				btn_b.classList.add("off");
				clearTxt.innerHTML = "";
			}, resetInpValRender);
		} else {
			alert("Пустое значение");
		}	
	});	

	resetBtnC.addEventListener( "click" , function() {
		var minVals = minInp.value;
		var secVals = secInp.value;
		localStorage.removeItem('min');
		localStorage.removeItem('sec');
		tick(minVals, secVals);
	});	
	
	
	
//получаем localStorage при загрузке страницы
	if(localStorage.getItem('innerHTML-a')!==null) {
		let innerL = localStorage.getItem('innerHTML-a');
		btn_a.innerHTML = innerL;
	}
	if(localStorage.getItem('classList-a')!==null) {
		let cls = localStorage.getItem('classList-a');
		btn_a.className = cls;	
	}
	if(localStorage.getItem('innerHTML-b')!==null) {
		let innerL = localStorage.getItem('innerHTML-b');
		btn_b.innerHTML = innerL;
	}
	if(localStorage.getItem('classList-b')!==null) {
		let cls = localStorage.getItem('classList-b');
		btn_b.className = cls;	
	}
	if(localStorage.getItem('innerHTML-c')!==null) {
		let innerL = localStorage.getItem('innerHTML-c');
		btn_c.innerHTML = innerL;
	}
	if(localStorage.getItem('classList-c')!==null) {
		let cls = localStorage.getItem('classList-c');
		btn_c.className = cls;	
	}	
	
	if(localStorage.getItem('min')!==null && localStorage.getItem('sec')!==null) {
		var mins = localStorage.getItem('min');
		var secs = localStorage.getItem('sec');
		tick(mins, secs);
	}	


});	
})();















