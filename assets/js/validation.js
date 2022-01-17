function validation(){
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var email=document.getElementById("email");
    var subject=document.getElementById("subject");
    var message=document.getElementById("message");
    

    if(fname.value==""){
        document.getElementById("error1").innerHTML="* Enter your First Name";

    }
    if(lname.value==""){
        document.getElementById("error2").innerHTML="* Enter your Last Name";

    }
    if(email.value==""){
        document.getElementById("error3").innerHTML="* this field this required";

    }
    
    if(subject.value==""){
        document.getElementById("error4").innerHTML="* this field is required";

    }
    if(message.value==""){
        document.getElementById("error5").innerHTML="* this field is requuired";
    }

    if( fname.value==""||lname.vaue==""||email.value==""||subject.value==""||message.value==""){
        return false;
    }else{
        //alert("We receved your request");
        return true;
    }
}