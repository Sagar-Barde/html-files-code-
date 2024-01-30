var Email = document.forms['from']['Email'];
var Email = document.forms['from']['password'];

var email_error = Document.getElementById('email_error');
var password_error = Document.getElementById('password_error');


function validated(){

    if( email_error.value.length <15)
    {
        email_error.style.border ="1 px solid red";
        email_error_style.display="black";
        email_error.focus();
        return false;
    }
}

function validated(){

    if( password_error.value.length <10)
    {
        password_error.style.border ="1 px solid red";
        password_error_style.display="black";
        password_error.focus();
        return false;
    }
}