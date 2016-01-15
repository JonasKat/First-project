/* global printColors */

//Try out of JSON
$(document).ready(function(){
    $(".ajax").on("click", function() {
    $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?,",
    { numResults: 3 },
    function(colorPalettes) {
    printColors(colorPalettes);
    });
    function printColors(colorPalettes){
        for(var palette in colorPalettes){
        console.log(colorPalettes[palette].title);
        console.log(colorPalettes[palette].colors[0]); //HEX color code
        };
    };	
});
// Form script
	$(".btn").on("click", function (event) {
        event.preventDefault();
		var userName = $(this).closest("form").find("#text").val();
		var email = $(this).closest("form").find("#email").val();
		var password = $(this).closest("form").find("#pwd").val();
		if(userName == null || userName == ""){
			alert("Name must be filled out");
			return;
		} 
		if(email == null || email == ""){
			alert("Email must be filled out");
			return;
		}
		if(password == null || password == ""){
			alert("Password must be filled out");
			return;
		} 
		$(".successful").fadeIn();
        $(".form-background").slideDown();
	});	
    // End of Form Script
});
