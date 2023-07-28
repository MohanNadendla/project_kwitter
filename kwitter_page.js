//YOUR FIREBASE LINKS
var firebaseConfig = {

      apiKey: "AIzaSyAH5tteLomc3ABzd86EfBsKaoQlqHDKBZ8",
    
      authDomain: "kwitter-b1de3.firebaseapp.com",
    
      databaseURL: "https://kwitter-b1de3-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-b1de3",
    
      storageBucket: "kwitter-b1de3.appspot.com",
    
      messagingSenderId: "864957368831",
    
      appId: "1:864957368831:web:964a0de85a23733fabbfca"
    
    };
    
    
    // Initialize Firebase
    
      firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      }); 
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
