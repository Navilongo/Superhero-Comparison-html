
$.ajax({
	type : "POST",
	url : '/api/v1.0/sinister-six',
	dataType: "json",
	data: JSON.stringify,
	contentType: 'application/json;charset=UTF-8',
	success: function (data) {
		console.log(data);
		}
	});