
//ADD YOUR FIREBASE LINKS HERE
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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"
  
  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html"
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("Room_name-"+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomNames(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
        //End code
        });});}
  getData();
  
  function redirectToRoomNames(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
  }
