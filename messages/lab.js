function parse_data() {
    jsondata = "data.json";
    parsed_objects = JSON.parse(jsondata);
    elem = document.getElementById("results");
    for (i = 0; i < parsed_objects.length; i++) {
            elem.innerHTML += "<p> ITEM 1 " + parsed_objects[i]["content"] + parsed_objects[i]["username"] + </p>;
    }
}

