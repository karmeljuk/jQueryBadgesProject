$(function() {
	$.ajax({
		url: 'https://www.codeschool.com/users/1032742.json', 
		dataType: 'jsonp', 
		success: function (response) {
			$.each(response.courses.completed, function () {
				$('#badges').append(
						'<div class="course">' + 
							`<h3>${this.title}</h3>`+
							`<img src="${this.badge}">`+
							`<a class="btn btn-primary" href="${this.url}" target="_blank">See Course</a>`+
						'</div>'
					);
			})
		}
	})
});
