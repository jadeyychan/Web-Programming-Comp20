/* Parses and prints data */

function parse() {
	var xhr = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			  	var response = xmlhttp.responseText;
			  	parsed_objects = JSON.parse(response);
	    		elem = document.getElementById("messages");
	    		
	    		for (i = 0; i < parsed_objects.length; i++) {
		    		var content = parsed_objects[i]["content"];
		    		var username = parsed_objects[i]["username"];
		            elem.innerHTML += "<p>" + "<c>" + content + "</c>" + "<us>" + username + "</us>"+ "</p>";
				}
		}
	}

xhr.open("get", "data.json", true);
}