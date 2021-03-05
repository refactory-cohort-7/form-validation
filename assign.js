//global constants
const letters = /^[A-Za-z]+$/;
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const minName = 5;
const phoneFormat = /^[0-9]+$/;
const maxAbout = 50;


//function for validating the name
let formName = () => {
  var name = document.myForm.field1;
  //checking if the name is empty, then make borders red
  if (name.value == '') {
    name.style.border = '2px solid red';
    name.focus();
    return false;
  }
  //checking if the length of the name is less than 5 characters
  if (name.value.length < minName) {
    name.focus();
    name.style.border = '2px solid red';
    alert('Please make sure your name is more than 5 characters!');
    return false;
  }
  //ensuring that the name contains only letter btn a-z
  if (name.value.match(letters)) {
    return true;
  } else {
    name.focus();
    name.style.border = '2px solid red';
    alert('Please ensure your name contains only letters');
    return false;
  }
};

//function for validating the email
let formEmail = () => {
  var email = document.myForm.field2;
  //checking if the email field is empty, then make borders red
  if (email.value == '') {
    email.style.border = '2px solid red';
    email.focus();
    return false;
  }
  //checking the format of the email
  if (email.value.match(emailFormat)) {
    return true;
  } else {
    email.focus();
    email.style.border = '2px solid red';
    alert('Please ensure your is in correct format eg me@mail.com');
  }
};

//function to validate the phone number
let formPhone = () => {
  var phone = document.myForm.field3;
  //checking if the phone input is left empty, then make borders red
  if (phone.value == '') {
    phone.style.border = '2px solid red';
    phone.focus();
    return false;
  }
  //checking the format of phone to ensure only numbers are used
  if (phone.value.match(phoneFormat)) {
    return true;
  } else {
    phone.focus();
    phone.style.border = '2px solid red';
    alert('Please ensure your phone contact contains only numbers');
  }
};

//function to validate about field
let formAbout = () => {
  var about = document.myForm.field4;
  /**about section can be left empty
   * checking if the length of the about field is less than 50 characters
   * **/
  if (about.value.length > maxAbout) {
    about.focus();
    about.style.border = '2px solid red';
    alert(
      'Please make sure your input in about yourself field is not more than 50 characters!'
    );
    return false;
  }
  //checking the format to ensure only letters in about section
  if (about.value.match(letters)) {
    return true;
  } else {
    about.focus();
    about.style.border = '2px solid red';
    alert('Please ensure your about section contains only letters');
    return false;
  }
};

//function to validate the interests section
let formInterests = () => {
  var interests = document.myForm.field5;
  //checking if the interests field is left empty, then make borders red
  if (interests.value == '') {
    interests.style.border = '2px solid red';
    interests.focus();
    return false;
  }
};

//function to validate the addtional information section
let addtionalInfo = () => {
  var info = document.myForm.field6;
  /**
   * additional info should be less than 50 characters
   */
  if (info.value.length > maxAbout) {
    info.focus();
    info.style.border = '2px solid red';
    alert(
      'Please make sure your additional information is not more than 50 characters!'
    );
    return false;
  }
  //checking if the additioanl information section has been left empty
  if (info.value == '') {
    info.style.border = '2px solid red';
    info.focus();
    return false;
  }
};

//the function comtaining all other functions which will be called invoked in the eventlistner
let validation = () => {
  formName();
  formInterests();
  formEmail();
  formPhone();
  formAbout();
  formInterests();
  addtionalInfo();
};

//adding an eventlister to watch and call the function validation once a user tries to submit the form
document.myForm.addEventListener('submit', validation);
