window.onload = function(){
	//Run validation on every form in document
	var forms = document.getElementsByTagName("form");
	for(i=0;i<forms.length;i++){ 
		runForms(forms[i]);
	}
	//Run validation for one of the forms
		function runForms(theForm){
			theForm.onsubmit = function(event){
				if(!validate(theForm)){
					event.preventDefault();
					//return false:
				}
			};		
		}
	
	//validate form and select the errors
	function validate(form){
		var error = new Array();
		error[0]= validateHeader(form);
		error[1]= validateName(form);
		error[2]= validateText(form);	
		
		if(error.length>=1){
			alert("An error occurred: " + error);
			return false;
		}
		return true;
	};
	
	//	Validate every formfield 
	function validateHeader(form){
		var errorfield = new Array();
		if(!checkLength(form.titleInput.value, 50)){
			errorfield[0]= " Fieldname: titleInput ";
			errorfield[1]=" Errormessage: Rubriken innehåller för många tecken! ";
			errorfield[2]= false;
		}else if(!checkEmpty(form.titleInput.value, 1)){
			errorfield[0]= " Fieldname: titleInput ";
			errorfield[1]= "Errormessage: Var god fyll i rubrik!";
			errorfield[2]= false;
		};
		return errorfield;
	};
	
	
	function validateName(form){
		var errorfield = new Array();
		if(!checkLength(form.nameInput.value, 50)){
			errorfield[0]= " Fieldname: nameInput ";
			errorfield[1]= " Errormessage: Namnet innehåller för många tecken! ";
			errorfield[2]= false;
		};
		return errorfield;
	};
	
	function validateText(form){
		var errorfield = new Array();
		if(!checkLength(form.messageInput.value, 340)){
			errorfield[0]= " Fieldname: messageInput ";
			errorfield[1]= " Errormessage: Texten innehåller för många tecken! ";
			errorfield[2]= false;
		}else if(!checkEmpty(form.messageInput.value, 1)){
			errorfield[0]= " Fieldname: messageInput ";
			errorfield[1]= " Errormessage: Var god fyll i textfältet! ";
			errorfield[2]= false;
		};
		return errorfield;
	};

	//check maximumlength
	function checkLength(string, maxValue){
		if( string.length>maxValue ){
			return false;
		}
		return true;
	};
	//check minimumlength 
	function checkEmpty(string, minValue){
		if( string.length<minValue ){
			return false;
		};
		return true;
	};
	
};	
