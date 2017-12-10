(function() {

document.addEventListener('DOMContentLoaded', function(){ 
	var btn_a = document.getElementById('btn_a'),
		btn_b = document.getElementById('btn_b'),
		btn_c = document.getElementById('btn_c'),
		resetBtn = document.getElementById('resetBtn'),
		resetBtnC = document.getElementById('resetBtnC'),
		resetInp = document.getElementById('resetInp'),
		clearTxt = document.getElementById('clearTxt'),
		clearTxtC = document.getElementById('clearTxtC'),
		minInp = document.getElementById('minInp'),
		secInp = document.getElementById('secInp'),
    	timerId;
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
        clearTimeout(timerId);
		if((secVal !== '') && (minVal.length <= 2) && (secVal.length <= 2) && (minVal.length != 1) && (secVal.length != 1)) {
			btn_c.disabled = true;
			btn_c.classList.add("disabled");
			var min = +minVal;
			if (min<10) min = '0' + min;
			var sec = +secVal;
			if(sec<10)sec = '0' + sec;	

			timerId = setInterval(function() {
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
						sec = 60;
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
            clearTxtC.innerHTML = "";
		}
	}		

function btnFunc(self) {
    toogle(self);
    let localS = self.innerHTML;
    let id = self.id;
    console.log(id);
    localStorage.setItem('innerHTML'+id, localS);
    let ClsName = self.getAttributeNode('class');
    ClsName = ClsName.value;
    localStorage.setItem('classList'+id, ClsName);
}
btn_a.addEventListener( "click" , function() {
    btnFunc(this);
});
btn_b.addEventListener( "click" , function() {
	btnFunc(this);
});
btn_c.addEventListener( "click" , function() {
	btnFunc(this);
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
	

/*
	function getItems(localObj) {
		if(localStorage.getItem('localObj')!==null) {
			let innerL = localStorage.getItem('localObj');
			btn_a.innerHTML = innerL;
			switch (localObj) {
				case 'innerHTMLbtn_a':
					btn_a.innerHTML = innerL;
					break;
				case 'classListbtn_a':
					btn_a.className = innerL;	
					break;
				case 'innerHTMLbtn_b':
					btn_b.innerHTML = innerL;
					break;
				case 'classListbtn_b':
					btn_b.className = innerL;
					break;
				case 'innerHTMLbtn_c':
					btn_c.innerHTML = innerL;
					break;
				case 'classListbtn_c':
					btn_c.className = innerL;
					break;
			  default:
				break;
			}
		}		
	}

	getItems('innerHTMLbtn_a');
	getItems('classListbtn_a');
	getItems('innerHTMLbtn_b');
	getItems('classListbtn_b');
	getItems('innerHTMLbtn_c');
	getItems('classListbtn_c');
*/
	
//как было раньше
	if(localStorage.getItem('innerHTMLbtn_a')!==null) {
		let innerL = localStorage.getItem('innerHTMLbtn_a');
		btn_a.innerHTML = innerL;
	}
	if(localStorage.getItem('classListbtn_a')!==null) {
		let cls = localStorage.getItem('classListbtn_a');
		btn_a.className = cls;	
	}
	if(localStorage.getItem('innerHTMLbtn_b')!==null) {
		let innerL = localStorage.getItem('innerHTMLbtn_b');
		btn_b.innerHTML = innerL;
	}
	if(localStorage.getItem('classListbtn_b')!==null) {
		let cls = localStorage.getItem('classListbtn_b');
		btn_b.className = cls;	
	}
	if(localStorage.getItem('innerHTMLbtn_c')!==null) {
		let innerL = localStorage.getItem('innerHTMLbtn_c');
		btn_c.innerHTML = innerL;
	}
	if(localStorage.getItem('classListbtn_c')!==null) {
		let cls = localStorage.getItem('classListbtn_c');
		btn_c.className = cls;	
	}	

	if(localStorage.getItem('min')!==null && localStorage.getItem('sec')!==null) {
		var mins = localStorage.getItem('min');
		var secs = localStorage.getItem('sec');
		tick(mins, secs);
	}	

	
	
	
	

});	
})();















