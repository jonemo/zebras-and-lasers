javascript:(function(){
	window.sleepinterval=40;
	window.keys=[];
	window.bcval="111100001101100010000111000000000010000001110110111100001111111111111000011111111100000111110111000000000000111100001111000000000000011111111111000011111111111100001111111110000011110000000000000000011101001111111110000000011111111100000000000001111111111111000011011000011111111000000000000";
	/* the typist */
	window.typefn=function(el,i){
		el.value+=window.bcval.charAt(i);
		if (i<5){
			window.setTimeout(window.typefn, 300, el, i+1);
		}
		else if (i<window.bcval.length){
			window.setTimeout(window.typefn, window.sleepinterval*(1-(i/window.bcval.length)), el, i+1);
		}
	};
	window.typelines=function(el){
		el.value+="\n"+window.bcline2+"\n"+window.bcline3;
	};
	/* detect the trigger sequence while typing */
	document.onkeyup=function(e){
		window.keys.push(e.key);
		if (window.keys.length>5){window.keys.shift()}
		if (window.keys[0]==0 && window.keys[1]==1 && window.keys[2]==1 && window.keys[3]==1 && window.keys[4]==1){
			window.typefn(e.srcElement, 0)
		}
	}
})()
