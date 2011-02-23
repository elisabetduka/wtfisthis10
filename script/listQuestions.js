/** Function to list questions in html page */
function listQuestions(param) {	

	if (param === 'date') {
		$("#listQuestions").empty();
	} else if (param === 'pop') {
		$("#listQuestionsByPop").empty();
	}
	$.getJSON('http://wtf.lightside.se/api/index.php',{resource:'questions', jsonp:'callback'}, function(questions) {
		var id = [], i = 0;
		if (param === 'date') {
			sorted = questions.sort(function(i, j) {
				return Date.parse(j.post_date) - Date.parse(i.post_date);
			});
			questions = sorted;			
		} else if (param === 'pop') { 
			sorted = questions.sort(function(i, j) {
				return j.answers.length - i.answers.length;
			});
			questions = sorted;
		}
		/* Print all questions */
		for (var q in questions) {
			question = questions[q];
			if (question.post_date != null) {
				var qDate = Date.parse(question.post_date);
				question.post_date = qDate.toString('dd MMMM HH:mm');
			}
			if (param === 'date') {viewOne = question.post_date; viewTwo = question.answers.length + " svar";}
			if (param === 'pop') {viewOne = question.answers.length + " svar"; viewTwo = question.post_date;}
			/* Create html for one question */
			var answer = [], a = -1;
			answer[++a] ="						<li class='clearfix' id='q"+question.id+"'>";
			answer[++a] ="								<div class='grid_1'><img src='"+question.photo.urls.thumbnail+"' /></div>";
			answer[++a] ="								<div class='grid_5'><a href='pages/showQ.html?id="+question.id+"'>"+question.title+"</a></div>";
			answer[++a] ="								<div class='grid_2' id='tV"+question.id+"'><div class='view v"+question.id+"'>"+viewOne+"</div><div class='view hidden v"+question.id+"'>"+viewTwo+"</div></div>";
			answer[++a] ="						</li>";
			if (param === 'date') {
				$("#listQuestions").append(answer.join(""));
			} else if (param === 'pop') {
				$("#listQuestionsByPop").append(answer.join(""));
			}
			id[++i] = "";
		}
		$.each(id, function(_i) {
			var one = '#tV'+_i;
			var two = '.v'+_i;
			$(one).mouseenter(function () {
				$(two).stop(true, true).slideToggle();
			});
			$(one).mouseleave(function () {
				$(two).stop(true, true).slideToggle();
			});
		});

	});

}
