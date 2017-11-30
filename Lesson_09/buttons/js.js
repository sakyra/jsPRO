(function() {
//"use strict";
//localStorage

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
	
function toogle(self) {
	if(self.innerHTML == "ON") {
		self.innerHTML = "OFF";
		self.classList.add("off");

	} else {
		self.innerHTML = "ON";	
		self.classList.remove("off");
	}	
}	

btn_a.addEventListener( "click" , function() {
	toogle(this);
});

btn_b.addEventListener( "click" , function() {
	toogle(this);
});

btn_c.addEventListener( "click" , function() {
	toogle(this);
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

	let minVal = minInp.value;
	let secVal = secInp.value;
	
	if(secVal !== '') {
		btn_c.disabled = true;
		btn_c.classList.add("disabled");
		

		var min = +minVal;
		if (min<10) min = '0' + min;
		var sec = +secVal;
		if(sec<10)sec = '0' + sec;	

		var timerId = setInterval(function() {

			if(clearTxtC.innerHTML != '00:00') {
			
			console.log(clearTxtC.innerHTML == '00:00');
				if(sec == 00) {
					sec = 59;
					if(min<10) {
						min--;
						min = '0' + min;
					} else {
						min--;
					}
				}
				
				
			clearTxtC.innerHTML = "Кнопка сброситься через: <b>"+min+ ":" +sec+ "</b>";
			if(sec<10) {
				sec--;
				sec = '0' + sec;
			} else {
				sec--;
			}			
			} else {
				btn_c.innerHTML = "OFF";	
				btn_c.classList.add("off");
				btn_c.disabled = false;
				btn_c.classList.remove("disabled");
				clearTimeout(timerId);
			}
		}, 1000);		
	} else {
		alert("Пустое значение");
	}	
});	

});	
})();



