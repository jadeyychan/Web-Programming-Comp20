function parse() {
    jsondata = data.json;
    parsed_objects = JSON.parse(jsondata);
    elem = document.getElementById("messages");
    for (i = 0; i < parsed_objects.length; i++) {
            elem.innerHTML += "<p>" + "<c>" + parsed_objects[i]["content"] + "</c>" + "<us>" + parsed_objects[i]["username"] + "</us>"+ "</p>";
    }
}
