/**Function to validate all forms in document. 
Collects errormessages in array: var error. 
preventDefault() if it fails. 
When called it starts by collecting all forms in document and runs function runForms*/
function validateForm(){
	var forms = document.getElementsByTagName("form");
	for(i=0;i<forms.length;i++){ 
		runForms(forms[i]);
	}
	
	/*Runs function validate for one of the forms
		param: theForm*/
		function runForms(theForm){
			theForm.onsubmit = function(event){
				if(!validate(theForm)){
					event.preventDefault();
					//return false:
				}
			};		
		}
	
	/*Runs functions validateHeader, validateName, validateText
		Collects errormessages and returns false if any errormessages occur	
		param: form */
	function validate(form){
		var error = new Array();
		error[0]= validateHeader(form);
		error[1]= validateName(form);
		error[2]= validateText(form);	
		
		if(error.length>=1){
			alert("An error occurred: " + error);//replace with other
			return false;
		}
		return true;
	};
	
	/*	Validate titleInput, returns errormessages
		param: form*/
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
	
	/*	Validate nameInput, returns errormessages
		param: form*/
	function validateName(form){
		var errorfield = new Array();
		if(!checkLength(form.nameInput.value, 50)){
			errorfield[0]= " Fieldname: nameInput ";
			errorfield[1]= " Errormessage: Namnet innehåller för många tecken! ";
			errorfield[2]= false;
		};
		return errorfield;
	};
	/*	Validate nameInput, returns errormessages
		param: form*/
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

	/*checks maximumlength, returns true or false
		param: string and maxValue*/
	function checkLength(string, maxValue){
		if( string.length>maxValue ){
			return false;
		}
		return true;
	};
	/*checks minimumlength returns true or false
		param: string, minValue*/
	function checkEmpty(string, minValue){
		if( string.length<minValue ){
			return false;
		};
		return true;
	};
	
};
 