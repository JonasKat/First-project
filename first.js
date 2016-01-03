
$(document).ready(function(){
    $(".ajax").on("click", function() {
        $.get("data.txt", function( response ) {
        console.log( response );
        });
    });	
    alert("hello world!")
});