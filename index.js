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

function signin() {
    
    var signup_username = document.forms["signup"]["signup_username"].value;
	var signup_useremail = document.forms["signup"]["signup_useremail"].value;
	var signup_pwd = document.forms["signup"]["signup_pwd"].value;
	var repwd = document.forms["signup"]["repwd"].value;

    
	if(signup_username==null || signup_username=="" ){
        document.getElementById("errorbox").innerHTML = "Enter the User Name";
       return false;
}

if(signup_useremail==null || signup_useremail==""){
        document.getElementById("errorbox").innerHTML =
         "Enter the E-mail";
       return false;
}

if(signup_pwd==null || signup_pwd==""){
        document.getElementById("errorbox").innerHTML =
         "Enter the Password";
       return false;
}

if(repwd==null || repwd==""){
        document.getElementById("errorbox").innerHTML =
         "Enter the Retype Password";
       return false;
   }

if(signup_pwd != repwd){
        document.getElementById("errorbox").innerHTML = "Password Don't Match";
       return false;
   }


if (signup_username != '' && signup_useremail != '' && signup_pwd != '' && repwd != '' && signup_pwd == repwd){
    alert("Register/Signup Successfull!!");
}



}