//function to check last letters of image chosen to be uploaded. 
//Only jpeg, jpg, gif and png allowed at this point.

onclick = function(){
		var image = document.getElementById("imageUpload");
		var form = document.getElementById("createQuestion");

		form.onsubmit = function(event) {
			checkimage(form.imageUpload.value);
		};
		function checkimage(string) {
			if (string != "") {
				var pieces = string.split(".");
				console.debug("pieces:", pieces);
				var lastpiece = pieces[pieces.length-1];
				console.debug(lastpiece);
				var aif = {"jpg": 1, "jpeg": 1, "gif": 1, "png": 1};
				if (aif[lastpiece]) {
					console.debug(lastpiece, aif, "true");
					event.preventDefault();
					return true;
				} else {
					console.debug(lastpiece, aif, "false");
					event.preventDefault();
					return { result: "false", error: "fel på nåt" };
				};
			};
		};
};
