$(document).ready(function () {
	$(".button").on("click", function (event) {
        event.preventDefault();
		var userName = $(this).closest("form").find(".userName").val();
		var email = $(this).closest("form").find(".email").val();
		var password = $(this).closest("form").find(".password").val();
		if(userName == null || userName == ""){
			alert("Name must be filled out");
			return false;
		} 
		if(email == null || email == ""){
			alert("Email must be filled out");
			return false;
		}
		if(password == null || password == ""){
			alert("Password must be filled out");
			return false;
		} 
		$(".successful").show();
	});	
});
