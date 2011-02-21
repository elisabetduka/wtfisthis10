/** Main validation-function */


function validateForm() {
	/* Counter for inputs */
	
	$("#titleInput").apTextCounter({
		maxCharacters : 50,
		direction : "down",
		tracker : "#titleInputCounter",
		trackerTemplate : "%s tecken kvar"
	});

	$("#nameInput").apTextCounter({
		maxCharacters : 50,
		direction : "down",
		tracker : "#nameInputCounter",
		trackerTemplate : "%s tecken kvar"
	});

	$("#textInput").apTextCounter({
		maxCharacters : 340,
		direction : "down",
		tracker : "#textInputCounter",
		trackerTemplate : "%s tecken kvar"
	});
/* Sets rules and errormessages for every field*/
	$("form").validate({
		rules : {
			titleInput : {
				required : true,
				maxlength : 50
			},
			nameInput : {
				required : false,
				maxlength : 50
			},
			textInput : {
				required : true,
				maxlength : 340
			},
			imageUpload : {
				required : true,
				accept : "jpg|jpeg|gif|png"
			}
		},
		messages : {
			titleInput : {
				required : "Var snäll fyll i rubrik! ",
				maxlength : "Titeln är för lång! "
			},
			nameInput : {
				required : "Var snäll fyll i namn! ",
				maxlength : "Namnet är för långt! "
			},
			textInput : {
				required : "Var snäll fyll i textfältet! ",
				maxlength : "Texten är för lång!  "
			},
			imageUpload : {
				required : "Var snäll bifoga en bild! ",
				accept : "jpg|jpeg|gif|png"
			}
		},
		
		/*puts errormessages in id=information*/
	   errorLabelContainer: "#information",
	   wrapper: "p",
	   		
	   /* displays a default errormessage with the number of empty fields*/
		invalidHandler : function(form, validator, element) {
			var errors = validator.numberOfInvalids();
			if (errors) {
				var message = errors == 1 ? 'Hoppsan! Du missade att fylla i ett obligatoriskt fält!'
					: 'Hoppsan! Du missade att fylla i '
					+ errors
					+ ' obligatoriska fält. ';
				$("#information").html(message);
				$("#information").show();
			} else {
				$("#information").hide();
			}
		},
		/* puts a red border on the empty field*/
		highlight : function(element, errorClass) {
			$(element).css("border-color","red");
		},
		/*submithandler*/
		submitHandler : function(form) {
			form.submit();
		}
	});


};
