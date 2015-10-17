/* Parses and prints data */
function parse() {
    var xmlhttp = new XMLHttpRequest();
    var jsondata = xmlhttp.open("get", "data.json", true);
    parsed_objects = JSON.parse(jsondata);
    elem = document.getElementById("messages");
    for (i = 0; i < parsed_objects.length; i++) {
            elem.innerHTML += "<p>" + "<c>" + parsed_objects[i]["content"] + "</c>" + "<us>" + parsed_objects[i]["username"] + "</us>"+ "</p>";
    }
}
