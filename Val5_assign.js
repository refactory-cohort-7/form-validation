// Define the form elements (name, email, phone, about and interests).
var nameField = document.fcandidate.fname;
var emailField = document.fcandidate.femail;
var phoneField = document.fcandidate.fphone;
var aboutField = document.fcandidate.fabout;
var interestsfield = document.fcandidate.finterests;

// Examples of valid field inputs.
const nameEx = /^[A-Za-z]+$/;
const emailEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneEx = /^\+[0-9]+$/;

// Minimum field lengths.
const nameMin = 5;
const phoneMin = 13;
const aboutMax = 50;

// Validate the name field. Check for empty fields and length.
let valName = () => {
    if (nameField.value == '' || nameField.value.length < nameMin) {
        nameField.focus();
        nameField.style.border = '2px solid red';
        alert('Please enter a name (at least 5 characters).')
        return false;
    } 
    
    if (nameField.value.match(nameEx) == null) {
        nameField.focus();
        nameField.style.border = '2px solid red';
        alert('Please enter a name with letters only.')
        return false;
    }  else {
        return true;
    }
};

// Validate the email field. Check for empty fields and format.
let valEmail = () => {
    if (emailField.value == '' || emailField.value.match(emailEx) == null) {
        emailField.focus();
        emailField.style.border = '2px solid red';
        alert('Please enter a valid email address.');
        return false;
    } else {
        return true;
    }
};

// Validate the phone field. Check for empty fields, length and format.
let valPhone = () => {
    if (phoneField.value = '' || phoneField.value.length < phoneMin || phoneField.value.match(phoneEx) == null) {
        phoneField.focus();
        phoneField.style.border = '2px solid red';
        alert('Please enter a valid 13-digit phone number.');
        return false;
    } else {
        return true;
    }
};

// Validate the 'About Me' field. Check word count.
let valAbout = () => {
    var aboutLen = aboutField.value.split(" ").length;

    if (aboutLen > aboutMax) {
        aboutField.focus();
        aboutField.style.border = '2px solid red';
        alert('Please enter no more than 50 words.');
    } else {
        return true;
    }
};

// Callback the validation functions.
let validateForm = () => {
    valName();
    valEmail();
    valPhone();
    valAbout();
};

// Event listener invocation
document.fcandidate.addEventListener('submit',validateForm);