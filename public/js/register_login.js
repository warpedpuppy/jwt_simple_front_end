$(function(){
	let obj = {username: `test${Math.round(Math.random()*1000)}`, password: 'asdfasdfasdf'};

	$("#clearSession").click(function(){
		sessionStorage.clear();
	})


	$("#loginButton").click(function(){
		if(!sessionStorage.getItem('token')){
			register(obj);
		} else {
			console.log(sessionStorage.getItem('token'));
		}
	});


	function register(obj){
		$.ajax({
			method: 'POST',
			url: 'http://localhost:8080/api/users',
			data: obj,
			dataType: 'json',
			success: function (data){
				console.log(`register = ${data}`, data);
				login(obj);
			},
			error: function (error){
				console.error(error.responseText)
			}
		})
	}
	
	function login(obj) {
		console.log('login = ', obj)
		$.ajax({
			method: 'POST',
			url: 'http://localhost:8080/api/auth/login',
			data: obj,
			dataType: 'json',
			success: function (data){
				console.log(`login = ${data}`);
				sessionStorage.setItem('token', data.authToken)
			},
			error: function (error){
				console.error(error.responseText)
			}
		})
	}

	
})