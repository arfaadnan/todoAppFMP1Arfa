firebase.database().ref("todos").on("child_added", (data) => {
    var liElement = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    liElement.appendChild(liText);

    var buttonDiv = document.createElement("div");

    var deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-danger";
    var deltbtnText = document.createTextNode("Delete");
    deletebtn.appendChild(deltbtnText);
    deletebtn.setAttribute("id", data.val().key);
    deletebtn.setAttribute("onclick", "deleteItem(this)");

    var editbtn = document.createElement("button");
    editbtn.className = "btn btn-warning";
    var edittbtnText = document.createTextNode("Edit");
    editbtn.appendChild(edittbtnText);
    editbtn.setAttribute("id", data.val().key);
    editbtn.setAttribute("onclick", "editItem(this)");

    buttonDiv.appendChild(deletebtn);
    buttonDiv.appendChild(editbtn);

    liElement.appendChild(buttonDiv);

    var list = document.getElementById("list");
    list.appendChild(liElement);
});

// ... (rest of your code remains unchanged)
