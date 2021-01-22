document.getElementById('signup-btn').addEventListener('click', register);
function register(e){
    
    e.preventDefault();
    var name=document.getElementById('name').value;
    var schoolName= getInputValue('sname');
    var email=getInputValue('email');
    var password=getInputValue('password');

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((register) => {
    // Signed in 
    var user = register.name;
    firebase.firestore().collection('register').add({
        email: email,
        name:name,
        password:password,
        schoolName:schoolName,
        create:new Date()
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  })
  });
function getInputValue(id){
    return document.getElementById(id).value;
  }
}