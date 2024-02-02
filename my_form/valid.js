function validate() {
   var form = document.myForm;

   document.getElementById("fnameError").innerHTML = "";
   document.getElementById("lnameError").innerHTML = "";
   document.getElementById("emailError").innerHTML = "";
   document.getElementById("MError").innerHTML = "";
   document.getElementById("AError").innerHTML = "";
   document.getElementById("PError").innerHTML = "";
   document.getElementById("GError").innerHTML = "";
   var f=1;
   //name
   if (form.FName.value == "") {
      var fnameError = document.getElementById("fnameError");
      fnameError.innerHTML = "Enter the First Name";
      form.FName.focus();
      return false;
   }

   if (form.LName.value == "") {
      var lnameError = document.getElementById("lnameError");
      lnameError.innerHTML = "Enter the Last Name";
      form.LName.focus();
      return false;
   }
   //gender
   
   var gender = document.getElementsByName("gender");
   var genderValue = false;

   for(var i=0; i < gender.length;i++){
      if(gender[i].value){
         genderValue = true; 
         break;   
      }
   }
   if(genderValue==false){
      var GError=document.getElementById("GError");
      GError.innerHTML="choose one";
      form.gender.focus();
      return false;
   }
   
   //mobile
   if (form.Mobile.value == "" || isNaN(form.Mobile.value)) {
      var MError = document.getElementById("MError");
      if(form.Mobile.value == "") {
          MError.innerHTML = "Enter the contact no.";
      } else if(isNaN(form.Mobile.value)) {
          MError.innerHTML = "Enter only digits";
      }
      form.Mobile.focus();
      return false;
  }
  //email
  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     var emailError=document.getElementById("emailError");
     emailError.innerHTML="Please enter correct email ID";
     form.email.focus() ;
     return false;
  }
   //aadhar
   if (form.aadhar.value == "" || isNaN(form.aadhar.value)) {
      var AError = document.getElementById("AError");
      if(form.aadhar.value == "") {
         AError.innerHTML = "Enter the Aadhar no.";
      } else if(isNaN(form.aadhar.value)) {
         AError.innerHTML = "Enter only digits";
      }
      form.aadhar.focus();
      return false;
   }
   //pan
   if (form.pan.value == "" || !isNaN(form.pan.value)) {
      var PError = document.getElementById("PError");
      if(form.pan.value == "") {
         PError.innerHTML = "Enter the Pan no.";
      } else if(!isNaN(form.pan.value)) {
         PError.innerHTML = "Must be alpha-numeric";
      }
      form.pan.focus();
      f=0;
      return false;
   }
   if(f==0){
      display();
   }

   return true;
}
function display() {
   var form = document.myForm;

   var fName = form.FName.value;
   var mName = form.MName.value;
   var lName = form.LName.value;
   var gender = form.gender.value;
   
  document.write("name: "+fName +" "+mName+" "+lName);
  document.write("gender: "+ gender);
  
}
