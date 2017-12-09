(function() {
"use strict";
document.addEventListener('DOMContentLoaded', function(){ 
	var d = document;
	var deck = d.getElementById("deck");


	let cards = [6,7,8,9,10,'В','Д','К','Т'];
	let cards_suit = [];

	function addSuit(suit) {
		for(let i=0; i<cards.length; i++) {
			cards_suit[cards_suit.length] = cards[i]+suit;
		}		
	}
	addSuit('&#9829;');
	addSuit('&#9830;');
	addSuit('&#9827;');
	addSuit('&#9824;');
		
	//console.log(cards_suit);
	
	function getShuffleCart(_cards) {
		var shuffle_cart = _cards.sort(function(){ return 0.5-Math.random() });	
		return shuffle_cart;
	}
	
	//console.log(shuffle_mass);
	function getCards() {	
		for(let i=0; i<cards_suit.length; i++) {
			var cart = document.createElement('div');	
			if(~cards_suit[i].indexOf("&#9829;") || ~cards_suit[i].indexOf("&#9830;")) {
				cart.innerHTML = '<span class="red">'+cards_suit[i]+'</span><span class="invert red">'+cards_suit[i]+'</span>';
			} else {
				cart.innerHTML = '<span class="black">'+cards_suit[i]+'</span><span class="invert black">'+cards_suit[i]+'</span>';
			}
			deck.appendChild(cart);
		}
		
	}
	
	
	getShuffleCart();
	
	
});	

})();















