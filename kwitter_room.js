
//ADD YOUR FIREBASE LINKS HERE
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyAs-KBVc2mKAnzYDGN1lne6bhAxBT0hYWU",
    databaseURL:"https://class-test-8487c-default-rtdb.firebaseio.com/",
    authDomain: "class-test-8487c.firebaseapp.com",
    projectId: "class-test-8487c",
    storageBucket: "class-test-8487c.appspot.com",
    messagingSenderId: "1030534049819",
    appId: "1:1030534049819:web:baff2f5cd9809f275a88be",
    measurementId: "G-91D3DT4D00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML='WELCOME '+username+"!";
function addRoom()
  { 
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
     purpose:"please wait "
     });
     localStorage.setItem("myroom",room_name);
    window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     firebase_message_id = childKey;
     message_data = childData
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    namewithtag = "<h4> "+ name +"<img class='user_trick' src='tick.png'></h4>";
    messagewithtag = "<h4 class='message_h4'>" + message +"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    spanwithtag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hrs>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirect_to_room(name)
{
localStorage.setItem("myroom",name);
window.location="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
 window.location.replace("kwitter.html");
}

function updateLike(message_id)
{

 console.log("clicked on like button -" + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 update_like = Number(like) + 1;
 console.log(update-likes);

firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes
});

}