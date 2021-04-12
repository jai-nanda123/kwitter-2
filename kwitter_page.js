//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";





}
