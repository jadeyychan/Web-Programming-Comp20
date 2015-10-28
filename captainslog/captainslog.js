$(document).ready(function() {

	$("input").on("change", function() {
		var message = ($(this).val());
		var timestamp = new Date();
		var entry = timestamp+" - "+message;

		$("#log").prepend("<div>"+entry+"</div>");
		$(this).val(""); // resetting the input field to empty
	});
});	
