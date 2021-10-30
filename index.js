// login form
function login()
{
    var username = document.forms["loginform"]["username"].value;
    var password = document.forms["loginform"]["password"].value;

    if(username==null || username==''){
        document.getElementById("errorbox").innerHTML="enter your username";
        return false;
    }
    if(password==null || password==''){
        document.getElementById("errorbox").innerHTML="enter your password";
        return false;
    }

    if(username != '' && password != ''){
        alert("Login successfully");
    }

}

//sign form

