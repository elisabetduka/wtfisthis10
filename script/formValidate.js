/** Main validation-function */
function validateForm() {

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

	$("#messageInput").apTextCounter({
		maxCharacters : 340,
		direction : "down",
		tracker : "#messageInputCounter",
		trackerTemplate : "%s tecken kvar"
	});

	$("form")
			.validate(
					{

						rules : {
							SCHMISCMHAInput : {
								required : true,
								maxlength : 50
							},
							titleInput : {
								required : true,
								maxlength : 50
							},
							nameInput : {
								required : false,
								maxlength : 50
							},
							messageInput : {
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
								required : "REQ",
								maxlength : "MAX"
							},
							nameInput : {
								required : "REQ",
								maxlength : "MAX"
							},
							messageInput : {
								required : "REQ",
								maxlength : "MAX"
							},
							imageUpload : {
								required : "REQ",
								accept : "jpg|jpeg|gif|png"
							}
						},

						invalidHandler : function(form, validator, element) {
							var errors = validator.numberOfInvalids();
							if (errors) {
								var message = errors == 1 ? 'You missed 1 field. It has been highlighted'
										: 'You missed '
												+ errors
												+ ' fields. They have been highlighted ';
								$("#information").html(message);
								$("#information").show();
							} else {
								$("#information").hide();
							}
						},

						highlight : function(element, errorClass) {
							$(element).fadeOut(function() {
								$(element).fadeIn();
								
							});
						},

						submitHandler : function(form) {
							form.submit();
						}
					});

	// var forms = $("form");
	// $.each(forms, function() {
	// $(this).submit(function() {
	// $(this).validate({
	// debug: true
	// });
	//
	// });
	//
	// });

};
