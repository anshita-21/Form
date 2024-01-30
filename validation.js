function test()
{
    //Fname
    var fn=document.getElementById("fname").value;
    if(fn==""){
        document.getElementById("fnameError").innerHTML="enter the first name!";
        document.getElementById("fnameError").style.display="block";
        return false;
    }
    else{
        document.getElementById("fnameError").style.display="none";
    }
    //Lname
    var ln=document.getElementById("lname").value;
    if(ln==""){
        document.getElementById("lnameError").innerHTML="enter the last name!";
        document.getElementById("lnameError").style.display="block";
        return false;
    }
    else{
        document.getElementById("lnameError").style.display="none";
    }

    //gender
      var gender = document.getElementsByName("gender");
      var isChecked = false;
     
      for(var i=0; i<gender.length; i++)
      {
        if(gender[i].checked)
        {
            //alert(gender[i].value);
            isChecked = true;
            break;
        }   
      }
      if(!isChecked)
      {
         document.getElementById("GError").innerHTML = "select your gender!";
         document.getElementById("GError").style.display = "block";
         return false;
      }
      else{
         document.getElementById("GError").style.display = "none";//data hidden
      }

    //phone no

    var ph = document.getElementById("mobile").value;
    if(!phonenumber(ph)){
        return false;
    };

    //email
    var email = document.getElementById("email").value;
    if (email == null || email == "") {  
        document.getElementById("EError").innerHTML = "invalid email";
        document.getElementById("EError").style.display = "block";
        return false;
    } 
    
    if( !validateEmail(email)) { 
        document.getElementById("EError").innerHTML = "invalid format!";
        document.getElementById("EError").style.display = "block";
        return false;
    }
    else{
        document.getElementById("EError").style.display="none";
    }
    //aadhar
    var ad= document.getElementById("aadharr").value;
    if(!aadharnumber(ad)){
        return false;
    }
    //pan
    var pan = document.getElementById("pan").value;
    if(!isValidPanCardNo(pan)){
        document.getElementById("PError").innerHTML = "invalid pan no!";
        document.getElementById("PError").style.display = "block";
        return false;
    }
    else{
        document.getElementById("PError").style.display="none";
    }
    //desription
    var d=document.getElementById("des").value;
    if(d.length==0){
        document.getElementById("DError").innerHTML="enter!";
        document.getElementById("DError").style.display="block";
        return false;
    }
    else if(d.length>500){
        document.getElementById("DError").innerHTML="not more than 500 characters!";
        document.getElementById("DError").style.display="block";
        return false;
    }
    else{
        document.getElementById("DError").style.display="none";
    }

}

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno)){
      document.getElementById("MError").style.display="none";
      return true;
   }
   else{
    document.getElementById("MError").innerHTML = "invalid ph!";
    document.getElementById("MError").style.display = "block";
    return false;
   }
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}

function aadharnumber(inputtxt)
{
  var addno = /^\d{12}$/;
  if(inputtxt.match(addno)){
      document.getElementById("AError").style.display="none";
      return true;
   }
   else{
    document.getElementById("AError").innerHTML = "invalid aadhar!";
    document.getElementById("AError").style.display = "block";
    return false;
   }
}

function isValidPanCardNo(panCardNo) {

    panCardNo = panCardNo.toUpperCase();
     let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
     if (panCardNo == null) {
         return false;
     }
     if (regex.test(panCardNo) == true) {
         return true;
     }
     else {
         return false;
     }
 }    


//   function isValidMobileNumber(mobileNumber) {
//     var mobileNumberPattern = /^[0-9]{10}$/;
//     return mobileNumberPattern.test(mobileNumber);
//   }

//   function isValidPinNumber(pinNumber) {
//     var pinNumberPattern = /^[0-9]{6}$/;
//     return pinNumberPattern.test(pinNumber);
//   }

