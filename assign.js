//Defining the form elements
var names = document.candidateForm.myName;
var emailAdd = document.candidateForm.myEmail;
var telephone = document.candidateForm.myNumber;
var aboutField = document.candidateForm.aboutMe;

//Regex to be used for name, email and phone respectively
const nameRegex = /^[A-Z a-z]+$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^[0-9a-zA-Z+]+$/;

//Constants for validating the field length of name, phone number and about me field respectively
const minName = 5;
const minPhone = 13;
const maxWordAbout = 50;

// Function to validate the name field in the form
let myname = () => {
  // validating the form field to ensure it has input
  if (names.value == '') {
    names.focus();
    names.style.border = '2px solid red';
    alert('Please enter a name');
    return false;
  }
  // Ensuring the name field has more than five characters.
  if (names.value.length < minName) {
    names.focus();
    names.style.border = '2px solid red';
    alert('Please enter a name (at least 5 characters).');
    return false;
  }
  // Ensuring the name field has only a string of characters.
  if (names.value.match(nameRegex)) {
    return true;
  } else {
    alert('Please use letters only in your name');
    names.style.border = '2px solid red';
    return false;
  }
};

//Function to validate email
let forEmail = () => {
  if (emailAdd.value == '') {
    emailAdd.focus();
    emailAdd.style.border = '2px solid red';
    alert('Please input your email Address');
    return false;
  }
//Ensuring the email is valid
  if (emailAdd.value.match(emailRegex)) {
    return true;
  } else {
    alert('Please use a valid email');
    emailAdd.style.border = '2px solid red';
    return false;
  }
};

//Validating phone number
let telephoneCall = () => {
  if (telephone.value == '') {
    telephone.focus();
    telephone.style.border = '2px solid red';
    alert('Please enter your phone');
    return false;
  }
  if (telephone.value.length != minPhone) {
    telephone.focus();
    telephone.style.border = '2px solid red';
    alert('Please input a correct phone number');
    return false;
  }

  if (telephone.value.match(phoneRegex)) {
    return true;
  } else {
    alert('Please input a valid phone number');
    telephone.style.border = '2px solid red';
    telephoneOne.style.border = '2px solid red';
    telephoneTwo.style.border = '2px solid red';
    return false;
  }
};

//Validating the About field
let about = () => {
  if (aboutField.value.split('').length > maxWordAbout) {
    aboutField.focus();
    aboutField.style.border = '2px solid red';
    alert('Please use a maximum of fifty(50) words');
    return false;
  }
};
//calling back all the various functions above
let validation = () => {
  myname();
  forEmail();
  telephoneCall();
  about();
};

// An event Listener for the event of submitting
document.candidateForm.addEventListener('submit', validation);
