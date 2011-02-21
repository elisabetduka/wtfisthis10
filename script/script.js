/** Load all external js libraries */
var _dir = "../script/";
head.js(
			"../jsonSingleObject.js", 
			_dir+"showQuestion.js", 
			_dir+"formValidate.js",
			_dir+"jquery.apTextCounter.min.js",
			_dir+"jquery.validate.min.js"
);

/** Global variables */
var DEFINE = {
	/* Fieldlength */	
	nameInputLength: 50,
	titleInputLength: 50,
	textInputLength: 340,
	/* Classnames */
	nameInputClass: "nameInput",
	titleInputClass: "titleInput",
	textInputClass: "textInput",
	letterCounterSource: "textInput",
	letterCounterTarget: "letterCount"
}

/** Global error messages */
DEFINE['errorLength'] = "Felaktig längd, vänligen försök igen. Godkända värden: ";

/** Initialize functionality */
head(function() {
	// Add all separate function calls here or add one major function from script.js that calls everything else
	validateForm();
});

/** Check if object is empty */
function isEmpty(ob){
	for(var i in ob){ return false;}
	return true;
}

