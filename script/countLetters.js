function countLetters(source, output, maximum) {
	//	On event on key down do count left	
	console.debug(source, output, maximum);
	source.onkeydown = (function(target) {
		return function () {
			CountLeft(source,output,maximum);			
		};
	}(source));
	//	On event on key up do count left	
	source.onkeyup = (function(target) {
		return function () {
			CountLeft(source,output,maximum);			
		};
	}(source));
}

// Function for counting letters in the container
// Param: input, the char container. count, the counting container css selector, the max length of chars in input.		
function CountLeft(input, count, maxLetters) {
	console.debug("woho");
	if (input.value.length > maxLetters) {
		input.value = input.value.substring(0, maxLetters - 1);
	} else {
		var charleft = maxLetters - input.value.length;
		count.innerHTML = charleft;
	}
}
