'use strict';

const form = document.getElementById("submit");

form.addEventListener("click",(evt) => {

  evt.preventDefault();
  const fname = document.forms["myForm"]["fname"];
  const lname = document.forms["myForm"]["lname"];
  const email = document.forms["myForm"]["email"];
  const pnumber = document.forms["myForm"]["pnumber"];
  const pcode = document.forms["myForm"]["postalcode"];
  const pw = document.forms["myForm"]["password"];

  const mailre = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$');
  const pnre = new RegExp('[+]+358[0-9]{9,}');
  const pc = new RegExp('[0-9]{5,}');


  if(!fname.value){
    window.alert("Firstname cannot be empty!");
    return false;
  }
  if(!lname.value){
    window.alert("Lastname cannot be empty!");
    return false;
  }
  if(!pw.value){
    window.alert("Password cannot be empty!");
    return false;
  }
  if (email.value){
    if(mailre.test(email.value)===false) {
        window.alert("Please insert a valid email like so: 'Someone@somemail.com'");
        return false;
      }}

if(pcode.value) {
  if (pc.test(pcode.value) === false) {
    window.alert("Please insert a valid post code");
    return false;
  }
}

if(pnumber.value) {
  if (pnre.test(pnumber.value) === false) {
    window.alert("Please insert a Finnish number like so: +358 123456789");
    return false;

  }
}
});