$(function(){
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/api/protected',
			headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
			dataType: 'json',
			success: function (data){
				console.log(data);
			},
			error: function (error){
				console.error(error.responseText);
				window.location = '/index.html';
			}
		})
})