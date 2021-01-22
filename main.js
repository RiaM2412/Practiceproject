    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyB3VvcCpUSVrKfXXwHp-APl-3Wpcl9zCD0",
  authDomain: "practiceproject-7e239.firebaseapp.com",
  projectId: "practiceproject-7e239",
  storageBucket: "practiceproject-7e239.appspot.com",
  messagingSenderId: "451058574888",
  appId: "1:451058574888:web:0924cbd15d30399c6df71d",
  measurementId: "G-JW5VX8D517"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



document.getElementById('login-btn').addEventListener('click', submit);
//document.getElementById('signup-btn').addEventListener('click',register);


//form submission
function submit(e){
e.preventDefault();
var email=getInputValue('email');
var password=getInputValue('password');
//signin function
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((submit) => {
    // Signed in
    var user = submit.email;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
 
alert('logged in');
return document.getElementById('useraccess');
}


//notification user is signed in
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


function getInputValue(id){
    return document.getElementById(id).value;
  }
    

  //signup funtion
  
  // function register(e){
  //   // e.preventDefault();
  //   // var name=document.getInputValue('Name').value;
  //   // var schoolName= getInputValue('schoolname');
  //   // var email=getInputValue('email');
  //   // var password=getInputValue('password');
  //    alert('correct');

  // }