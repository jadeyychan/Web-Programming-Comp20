$(document).ready(function() {
	var storage = localStorage.getItem("prevEntries");
	$("#log").append(storage);

	$("input").on("change", function() {

		var message = ($(this).val());
		var timestamp = new Date();
		var entry = "<div>" + timestamp+" - "+message + "</div>";

		$("#log").append(entry);

		if (storage == null) {
			storage = entry;
		} else {
			storage = storage + entry;
		}

		localStorage.setItem('prevEntries', storage);
		$(this).val(""); // resetting the input field to empty
	});

});	


