// var firebaseConfig = {
//     apiKey: "AIzaSyCOKECe7rPNmj3q47xxRT2D-idPPy6M77M",
//     authDomain: "todoappfmp1.firebaseapp.com",
//     databaseURL: "https://todoappfmp1-default-rtdb.firebaseio.com",
//     projectId: "todoappfmp1",
//     storageBucket: "todoappfmp1.appspot.com",
//     messagingSenderId: "57341923768",
//     appId: "1:57341923768:web:6f35d2d759c7b8d962ff4d"
//   };

// // Initialize Firebase
// var fbr =firebase.initializeApp(firebaseConfig);
// console.log(fbr);
// //console.log(fbr.database);
// firebase.database().ref("todos").on("child_added",(data)=>{

//   // console.log(data.val())
//     var liElement =document.createElement("li");
    
//     var liText=document.createTextNode(data.val().value);
//     liElement.appendChild(liText);
//     console.log(liElement);
// // ******************Delete Button***********************************
//     var deletebtn = document.createElement("button");
//     deletebtn.style.backgroundColor="red";
//     var deltbtnText = document.createTextNode("Delete");
//     deletebtn.appendChild(deltbtnText);
//     deletebtn.setAttribute("id",data.val().key)

//     deletebtn.setAttribute("onclick","deleteItem(this)");

//     var list=document.getElementById("list");
//     liElement.appendChild(deletebtn);
//     list.appendChild(liElement);
    
    
    

//     // ********************Edit Button**************************
//     var editbtn = document.createElement("button");
//     editbtn.style.backgroundColor="blue";
//     var edittbtnText = document.createTextNode("Edit");
//     editbtn.appendChild(edittbtnText);

//     editbtn.setAttribute("onclick","editItem(this)");
//     editbtn.setAttribute("id",data.val().key);

//     var list=document.getElementById("list");
//     list.appendChild(liElement);
//     liElement.appendChild(editbtn);
// })

// function addToDo()
// {
//     var input = document.getElementById("inputField");
//     console.log(input.value);
//     var key = firebase.database().ref("todos").push().key;
//    // console.log(key)

//     var obj ={
//         value:input.value,
//         key:key,
//     }
// firebase.database().ref("todos").child(key).push(obj);
// input.value="";
// }

// //     var liElement =document.createElement("li");
    
// //     var liText=document.createTextNode(input.value);
// //     liElement.appendChild(liText);
// //     console.log(liElement);
// // // ******************Delete Button***********************************
// //     var deletebtn = document.createElement("button");
// //     var deltbtnText = document.createTextNode("Delete");
// //     deletebtn.appendChild(deltbtnText);

// //     deletebtn.setAttribute("onclick","deleteItem(this)");

// //     var list=document.getElementById("list");
// //     liElement.appendChild(deletebtn);
// //     list.appendChild(liElement);
    
    
    

// //     // ********************Edit Button**************************
// //     var editbtn = document.createElement("button");
// //     var edittbtnText = document.createTextNode("Edit");
// //     editbtn.appendChild(edittbtnText);

// //     editbtn.setAttribute("onclick","editItem(this)");

// //     var list=document.getElementById("list");
// //     liElement.appendChild(editbtn);
// //     list.appendChild(liElement);




// function deleteAll(){
//     var list = document.getElementById("list");
//     firebase.database().ref("todos").remove();
//     list.innerHTML="";

// }
// function deleteItem(a){
//     // console.log(a.parentNode.remove());
//     console.log(a.id);
//     firebase.database().ref("todos").child(a.id).remove()
//     a.parentNode.remove();

//     }

// function editItem(e){
// var val = e.parentNode.firstChild.nodeValue;
// var userInput= prompt("Enter updated value");
// var editToDo = {value: userInput,
// key:e.id,
// }
// firebase.database().ref("todos").child(e.id).set(editToDo);
// e.parentNode.firstChild.nodeValue = userInput;


// }









var firebaseConfig = {
    apiKey: "AIzaSyCOKECe7rPNmj3q47xxRT2D-idPPy6M77M",
    authDomain: "todoappfmp1.firebaseapp.com",
    databaseURL: "https://todoappfmp1-default-rtdb.firebaseio.com",
    projectId: "todoappfmp1",
    storageBucket: "todoappfmp1.appspot.com",
    messagingSenderId: "57341923768",
    appId: "1:57341923768:web:6f35d2d759c7b8d962ff4d"
  };

// Initialize Firebase
var fbr =firebase.initializeApp(firebaseConfig);
console.log(fbr);
//console.log(fbr.database);
firebase.database().ref("todos").on("child_added",(data)=>{

  // console.log(data.val())
    var liElement =document.createElement("li");
    
    var liText=document.createTextNode(data.val().value);
    liElement.appendChild(liText);
    console.log(liElement);
// ******************Delete Button***********************************
    var deletebtn = document.createElement("button");
    deletebtn.className="btn btn-danger";
    var deltbtnText = document.createTextNode("Delete");
    deletebtn.appendChild(deltbtnText);
    deletebtn.setAttribute("id",data.val().key)

    deletebtn.setAttribute("onclick","deleteItem(this)");

    var list=document.getElementById("list");
    liElement.appendChild(deletebtn);
    list.appendChild(liElement);
    
    
    

    // ********************Edit Button**************************
    var editbtn = document.createElement("button");
    editbtn.className="btn btn-warning";
    
    var edittbtnText = document.createTextNode("Edit");
    editbtn.appendChild(edittbtnText);

    editbtn.setAttribute("onclick","editItem(this)");
    editbtn.setAttribute("id",data.val().key);

    var list=document.getElementById("list");
    list.appendChild(liElement);
    liElement.appendChild(editbtn);
})

function addToDo()
{
    var input = document.getElementById("inputField");
    console.log(input.value);
    var key = firebase.database().ref("todos").push().key;
   // console.log(key)

    var obj ={
        value:input.value,
        key:key,
    }
firebase.database().ref("todos").child(key).push(obj);
input.value="";


    //  var liElement =document.createElement("li");
    
    //  var liText=document.createTextNode(input.value);
    //  liElement.appendChild(liText);
    //  var list=document.getElementById("list");
    //  liElement.appendChild(deletebtn);
    // console.log(liElement);
// ******************Delete Button***********************************
//     var deletebtn = document.createElement("button");
//     var deltbtnText = document.createTextNode("Delete");
//     deletebtn.appendChild(deltbtnText);

//     deletebtn.setAttribute("onclick","deleteItem(this)");

//     var list=document.getElementById("list");
//     liElement.appendChild(deletebtn);
//     list.appendChild(liElement);
    
    
    

//     // ********************Edit Button**************************
//     var editbtn = document.createElement("button");
//     var edittbtnText = document.createTextNode("Edit");
//     editbtn.appendChild(edittbtnText);

//     editbtn.setAttribute("onclick","editItem(this)");

//     var list=document.getElementById("list");
//     liElement.appendChild(editbtn);
//     list.appendChild(liElement);


}

function deleteAll(){
    var list = document.getElementById("list");
    firebase.database().ref("todos").remove();
    list.innerHTML="";

}
function deleteItem(a){
    // console.log(a.parentNode.remove());
    console.log(a.id);
    firebase.database().ref("todos").child(a.id).remove()
    a.parentNode.remove();

    }

function editItem(e){
var val = e.parentNode.firstChild.nodeValue;
var userInput= prompt("Enter updated value");
var editToDo = {value: userInput,
key:e.id,
}
firebase.database().ref("todos").child(e.id).set(editToDo);
e.parentNode.firstChild.nodeValue = userInput;


}

























