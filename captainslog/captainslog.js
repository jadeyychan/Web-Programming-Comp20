$(document).ready(function() {

	$("input").on("change", function() {
		var message = ($(this).val());
		$("#log").prepend("<div>"+message+"</div>");
		$(this).val(""); // resetting the input field to empty
	});
});	



	// var input = $("input").val();
	// console.log("input is");
	// console.log(input);

	// $("msg").change(function() {
	// 	console.log("do we get here?", message);
	// 	var message = $(".msg").text();
	// 	console.log("message is", message);
	// // $(".log").prepend(message);
	// });


// $("#myTextBox").on("change paste keyup", function() {
//    alert($(this).val()); 
// });