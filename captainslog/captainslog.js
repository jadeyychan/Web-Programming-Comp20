// $(document).ready(function() {

// 	$("input").on("change", function() {
// 		var message = ($(this).val());
// 		$("#log").prepend("<div>"+message+"</div>");
// 	});
// });	


$(document).ready(function() {

	$("input").keypress(function (e) {
		if (e.which == 13) {
			var message = ($(this).val());
			$("#log").prepend("<div>"+message+"</div>");
		}
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