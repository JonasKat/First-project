
//Try out of Ajax
$(document).ready(function(){
    $(".ajax").on("click", function() {
    $.get("data.txt", function( response ) {
        console.log( response );
        });
    });	

function printColors(colorPalettes){
for(var palette in colorPalettes){
console.log(colorPalettes[palette].title);
console.log(colorPalettes[palette].colors[0]); //HEX color code
}
}
// Form script
	$(".btn").on("click", function (event) {
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
		$(".successful").fadeIn();
        $(".form-background").slideDown();
	});	
    // End of Form Script
});
