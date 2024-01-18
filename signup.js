function a(){
    var b=document.getElementById("nm").value
    var c=document.getElementById("mob").value
    var d=document.getElementById("ema").value
    var e=document.getElementById("usnm").value
    var f=document.getElementById("pass").value
    var g=document.getElementById("conpass").value
    var h=document.getElementById("chk").value
    var regx=/^[a-zA-Z]{2,20}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[a-z@.][0-9]{5,50}$/
    var regx3=/^[a-zA-Z0-9!#@]{8,16}$/
    var k=true


    if(b==""){
        document.getElementById("name").innerHTML="Name is Required <br>"
        k== false;
    }
    else if(regx.test(b)){
        document.getElementById("name").innerHTML=""
    }
    else{
        document.getElementById("name").innerHTML="Invalid First Name"
        k== false;
    }
    
    if(c==""){
        document.getElementById("mobile").innerHTML="Mobile Number is Required <br>"
        k== false;
    }
    else if(regx1.test(c)){
        document.getElementById("mobile").innerHTML=""
    }
    else{
        document.getElementById("mobile").innerHTML="Invalid Mobile Number"
        k== false;
    }

    if(d==""){
        document.getElementById("email").innerHTML="Email is Required <br>"
        k== false;
    }
    else if(regx.test(d)){
        document.getElementById("email").innerHTML=""
    }
    else{
        document.getElementById("email").innerHTML="Invalid Email"
        k== false;
    }

    if(e==""){
        document.getElementById("username").innerHTML="Username is Required <br>"
        k== false;
    }
    else if(regx.test(e)){
        document.getElementById("username").innerHTML=""
    }
    else{
        document.getElementById("username").innerHTML="Invalid Username"
        k== false;
    }

    if(f==""){
        document.getElementById("password").innerHTML="Password is Required <br>"
        k== false;
    }
    else if(regx3.test(f)){
        document.getElementById("password").innerHTML=""
    }
    else{
        document.getElementById("password").innerHTML="Invalid Password"
        k== false;
    }

    if(g==f){
        document.getElementById("comfirmpassword").innerHTML=""
        k== false;
    }else if(g==""){
        document.getElementById("comfirmpassword").innerHTML="ReEnter Password"
    }
    else{
        document.getElementById("comfirmpassword").innerHTML="Password is not matching"
    }


    if(k){
        return true
    }
    else{
        return false
    }
    
    
}