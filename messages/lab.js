/* Parses and prints data */
function parse() {
	var xhr = new XMLHttpRequest();
	var url = "http://messagehub.herokuapp.com/messages.json";

	/* Recieving and parsing data */
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
		  	var response = xhr.responseText;
		  	var parsed_objects = JSON.parse(response);
		  	display(parsed_objects);
		  }
		}
		
	xhr.open("get", url, true);
	xhr.send();

	/* Printing data */
	function display(parsed_objects) {
		elem = document.getElementById("messages");
		
		for (i = 0; i < parsed_objects.length; i++) {
    		console.log("made it into parsed objects for loop!");
    		var content = parsed_objects[i]["content"];
    		var username = parsed_objects[i]["username"];
            elem.innerHTML += "<p>" + "<c>" + content + "</c>" + "<us>" + username + "</us>"+ "</p>";
			}
		}
}
