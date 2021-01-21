//will have all the javascript code
document.getElementById('login-btn').addEventListener('click', submit);
function submit(e){
e.preventDefault();
var username=getInputValue('username');
var password=getInputValue('password');
}



function getInputValue(id){
    return document.getElementById(id).value;
  }
    