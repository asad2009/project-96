var firebaseConfig = {
    apiKey: "AIzaSyAjsnZr6Ek0Gz_18bIMuIVOBcPI0YO1-ow",
    authDomain: "kwitter-bc245.firebaseapp.com",
    databaseURL: "https://kwitter-bc245-default-rtdb.firebaseio.com",
    projectId: "kwitter-bc245",
    storageBucket: "kwitter-bc245.appspot.com",
    messagingSenderId: "109730007589",
    appId: "1:109730007589:web:92d04be93f950640d78dcc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }