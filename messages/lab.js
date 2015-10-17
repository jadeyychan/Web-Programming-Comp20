/* Parses and prints data */


	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = parse() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			  	var response = xhr.responseText;
			  	parsed_objects = JSON.parse(response);
			  	console.log("about to print response");
			  	console.log(response);
			  	console.log("about to print parsed_objects");
			  	console.log(parsed_objects);
	    		elem = document.getElementById("messages");
	    		
	    		for (i = 0; i < parsed_objects.length; i++) {
		    		console.log("made it into parsed objects for loop!");
		    		var content = parsed_objects[i]["content"];
		    		var username = parsed_objects[i]["username"];
		            elem.innerHTML += "<p>" + "<c>" + content + "</c>" + "<us>" + username + "</us>"+ "</p>";
				}
		}
	}
xhr.open("get", "data.json", true);