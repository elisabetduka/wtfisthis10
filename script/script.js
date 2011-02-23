/** Load all external js libraries */
var _dir = "script/";
head.js(
			_dir+"showQuestion.js", 
			_dir+"listQuestions.js", 
			_dir+"jquery-ui-1.8.9.min.js",
			_dir+"formValidate.js",
			_dir+"jquery.apTextCounter.min.js",
			_dir+"jquery.validate.min.js",
			_dir+"date-sv-SE.js"
);

/** Initialize functionality */
head(function() {
	// Add all separate function calls here or add one major function from script.js that calls everything else
	validateForm();
	$(function() {
		var url;
		$("#tabs").tabs({
			ajaxOptions: {
				error: function( xhr, status, index, anchor ) {
					$( anchor.hash ).html(
						"Couldn't load this tab. We'll try to fix this as soon as possible. " +
						"If this wouldn't be a demo." );
				}
			},
			load: function(event, ui) {
				url = $.data(ui.tab, 'load.tabs');
		   	validateForm();
		   	if (url === "pages/listQ.html") {
			   	listQuestions('date');
		   	} else if (url === "pages/listQByPop.html") {
		   		listQuestions('pop');
		   	}
				$("#tabs").find("a").live('click', function() {
					var u = this.href;
					u = u.split('?');
					if (u.length > 1) {
						showQuestion(u[1]);
					}
					$(ui.panel).load(u[0]);
					return false;
				});
			}
		})
	});
});

