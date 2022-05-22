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

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  
}); 
}

getData();
function send() {
message = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:message,
    like:0
});
document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}