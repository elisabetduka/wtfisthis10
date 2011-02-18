/** Main validation-function */
function validateForm() {
	var forms = $("form");
	for (var i = 0; i < forms.length; i++) {
		var form = forms[i];
		form.onsubmit = function(event) {
			var results = validate(form);
			var errorMsg = {};
			for ( var key in results ) {
				var result = results[key];
				if ( result.success ) {
					event.preventDefault();
					errorMsg[result.name] = result;
				} else {
					event.preventDefault();
				}
			}
			if (!isEmpty(errorMsg)) {
				$("#information").addClass("error").empty();
				for (var key in errorMsg) {
					var errVal = errorMsg[key];
					$("<p></p>").append($("<span/>", {"class": "statusMessage", text: errVal.error})).prepend($("<span/>", {"class": "activeLabel", text: errVal.name +": "})).appendTo("#information");
				}
			}
			event.preventDefault();
		};
	}
}

/** Validates all needed fields */
var validate = function(form) {
	var minVal = 1;
	var result = {};
	// Exchange form.nameInput.title with the value of sibling label. Also with jQ.
	if (form.nameInput) {
		if (!checkLength(form.nameInput.value, minVal, DEFINE.nameInputLength)) { 
			result['nameInput'] = { success: "false", error: DEFINE.errorLength+minVal+"-"+DEFINE.nameInputLength, name: form.nameInput.title}; 
		}
	}
	if (form.titleInput) {
		if (!checkLength(form.titleInput.value, minVal, DEFINE.titleInputLength)) { 			
			result['titleInput'] = { success: "false", error: DEFINE.errorLength+minVal+"-"+DEFINE.titleInputLength, name: form.titleInput.title };  
		}
	}
	if (form.messageInput) {
		if (!checkLength(form.messageInput.value, minVal, DEFINE.messageInputLength)) { 			
			result['messageInput'] = { success: "false", error: DEFINE.errorLength+minVal+"-"+DEFINE.messageInputLength, name: form.messageInput.title };  
		}
	}
	if (form.imageUpload) {
		if (checkimage(form).success) {
			result['imageUpload'] = checkimage(form);
		}
	}
	return result;
};

/** Test for field length */
function checkLength(string, min, max) {
	if (string.length >= min && string.length <= max) { 
		return true; 
	}
	return false;
}

/** Test if image-upload is empty or has valid extension */
function checkimage(form) {
	if (!isEmpty(form.imageUpload)) {
		var string = form.imageUpload.value;
		var pieces = string.split(".");
		var lastpiece = pieces[pieces.length-1];
		var aif = {"jpg": 1, "jpeg": 1, "gif": 1, "png": 1};
		if (!aif[lastpiece]) {
			return { success: "false", error: "Fel filformat. Godkända format är: jpg, jpeg, gif, png", name: form.imageUpload.title };
		} else {
			return true;
		}
	}
	return { success: "false", error: "Ingen bild uppladdad. Vänligen försök igen.", name: form.imageUpload.title };
}
