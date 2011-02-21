//function to check last letters of image chosen to be uploaded. 
//Only jpeg, jpg, gif and png allowed at this point.

	function checkImageformats() {
		var image = document.getElementById("imageUpload");
		var form = document.getElementById("createQuestion");

		form.onsubmit = function(event) {
			checkimage(form.imageUpload.value);
		};
		function checkimage(string) {
			if (string != "") {
				var pieces = string.split(".");
				var lastpiece = pieces[pieces.length-1];
				var aif = {"jpg": 1, "jpeg": 1, "gif": 1, "png": 1};
				if (aif[lastpiece]) {
					return true;
				} else {
					event.preventDefault();
					return { result: "false", error: "fel på nåt" };
				}
			}
		};
};
