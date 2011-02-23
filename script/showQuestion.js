/** Function to fill and create html-page with a certain question */
function showQuestion(qid) {
	$.getJSON('http://wtf.lightside.se/api/index.php',{resource:'questions', id:qid.split('=')[1], jsonp:'callback'}, function(question) {
		/* Fill in question */
		$("#qTitle").html(question.title);
		$("#qImage").attr({"src": question.photo.urls.medium, "alt": question.title});
		$("#qMessage").html(question.description);
		if(question.post_date){
			if (question.author == null) {
				question.author = "Anonym";
			}
			$('#qAuthor').text('Skriven av '+question.author+' den '+ question.post_date);
		}   

		$("#answers").empty();
		/* Print all answers */
		for (var key in question.answers) {
			var aVal = question.answers[key];
			/* Create html for an answer */
			var answer = [], a = -1;
			answer[++a] ="					<div class='answer grid_8'>";
			answer[++a] ="						<p>";
			answer[++a] ="							"+aVal.answer_text;
			answer[++a] ="						</p>";
			answer[++a] ="						<p class='author'>";
			answer[++a] ="							Besvarat av ";
			if(aVal.name) {
				answer[++a] = aVal.name;
			} else {
				answer[++a] = "Anonym";
			}
			answer[++a] = 		" den " + aVal.published_time + ".</p>";
			answer[++a] ="						</p>";
			answer[++a] ="					</div>";
			$("#answers").append(answer.join(""));
		}
	});

}
