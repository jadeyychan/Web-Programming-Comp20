function parse() {
    jsondata = '[{"id":1,"content":"Do you really want to hurt me?","username":"Boy"},{"id":2,"content":"Do you really want to make me cry?","username":"George"}]'
    parsed_objects = JSON.parse(jsondata);
    elem = document.getElementById("messages");
    for (i = 0; i < parsed_objects.length; i++) {
            console.log(Object.keys(parsed_objects[count]));
            elem.innerHTML += "<p> ITEM 1 " + parsed_objects[i]["content"] + parsed_objects[i]["username"] + "</p>";
    }
}
