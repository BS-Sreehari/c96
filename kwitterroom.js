var firebaseConfig = {
  apiKey: "AIzaSyBU7KBDKQah2kapJ_LsoxTV4YQo1xfp2rY",
  authDomain: "classtest-feb10.firebaseapp.com",
  databaseURL: "https://classtest-feb10-default-rtdb.firebaseio.com",
  projectId: "classtest-feb10",
  storageBucket: "classtest-feb10.appspot.com",
  messagingSenderId: "366626359697",
  appId: "1:366626359697:web:b7adaf665c22ec755ab230"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  
});
localStorage.setItem("room_name", room_name);

window.location = "kwiterpage.html";
 }

 function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwiterpage.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
  
