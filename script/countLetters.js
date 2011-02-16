window.onload = function() {
//	Geting the elements by id
	var input = document.getElementById("textInput");
	var count = document.getElementById("cont");
	function (input, ){
//	On event on key down do count left	
	input.onkeydown = (function(target) {
		return function () {
		 CountLeft(input,count,340);			
		};
	}(input));
//	On event on key up do count left	
		input.onkeyup = (function(target) {
		return function () {
		 CountLeft(input,count,340);			
		};
	}(input));
// 	Function for counting letters in the container
//	 Param: input, the char container. count, the counting container css selector, the max length of chars in input.		
	 function CountLeft(input, count, max) {
	 	 max -= 1;
		 if(input.value.length > max){
		 input.value = input.value.substring(0, max);
		 }else{
		 var charleft = max - input.value.length;
		 count.innerHTML = charleft + ' Bokstäver kvar';
		 }
	}


};
