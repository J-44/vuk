function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
  <div id="type"></div>
 //End code
 });});}
getData();
user_name=document.getElementById("name").value;
room_name=document.getElementById("nam").value;
function send(){
    messenger=document.getElementById("name").value;
    firebase.database().ref(room_name).push({
        name: user_name,
            message: msg,
            like: 0
      });
}
function getaway(){
    window.location.replace("index.html");
}