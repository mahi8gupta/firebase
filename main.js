var firebaseConfig = {
    apiKey: "AIzaSyAy6VS_s5CC06dIXDyqVK1OQDzqg_G3Q4c",
    authDomain: "lets-chat-b30b2.firebaseapp.com",
    databaseURL: "https://lets-chat-b30b2-default-rtdb.firebaseio.com",
    projectId: "lets-chat-b30b2",
    storageBucket: "lets-chat-b30b2.appspot.com",
    messagingSenderId: "790752888204",
    appId: "1:790752888204:web:834767a649b3b96a48c2a9"
  };
  
  
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
    });
}