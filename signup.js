document.getElementById('signup-btn').addEventListener('click', register);
function register(e){
    
    e.preventDefault(e);
    var name=getInputValue('Name');
    var schoolName= getInputValue('schoolname');
    var email=getInputValue('email');
    var password=getInputValue('password');
}
function getInputValue(id){
    return document.getElementById(id).value;
  }