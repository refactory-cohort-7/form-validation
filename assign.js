// Decalaring all the initial variables required in our work

const formN = document.formName.field1;
const formE = document.formName.field2;
const formPhone = document.formName.field3;
const formAboutMySelf = document.formName.field4;
const formInterests = document.formName.field5;
const formAboutMySchool = document.formName.field6;

// The helper function validating the name field values to be submitted
let nameCheck = () => {
    // Regular expression rule to ensure the name field allows alphabetic letters with spaces.
    const nameExp = /^[a-zA-Z]/;
    //The first if statement checks if its not an empty string
    if(formN.value == ''){
        formN.style.border = '2px solid red';
        alert("Please type something in the name field");
        return false
    //Second if statement checks whether the length is actually greater than 5
    }else if (formN.value.length<5){
        formN.style.border = '2px solid red';
        alert('Name can only be greater than 5 characters')
        return false
    //Last if statement checks if only letters and spaces were used with Regexp
    }else if (!formN.value.match(nameExp)){
        alert('Name cannot include numbers, signs and letters')
        formN.style.border = '2px solid red';
        return false
    }else {
        return true
    }
}


// The helper function validating the email field values to be submitted
let emailCheck = () => {
    //    A regular expression rule for character specification in the email field.
    var emailRegexp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if statement to perform the dirty logic work for us
    if (formE==''){
        formE.style.border = '2px solid red';
        alert('Please type something in your email field')
        return false
    }else if (!formE.value.match(emailRegexp)){
        alert('Please input a valid email address')
        return false
    }else {
        return true
    }
    
}

// The Phone helper function
let phoneCheck(){
    //Regular expression rule to ensure the mobile phone field allows for numbers and a plus sign only.
    const mobileRegexp = /^[\0-9a-zA-Z]+$/;

}

// This is our validation entry function calling all the helper functions
let validation = () => {
    nameCheck();
    emailCheck();
}

document.formName.addEventListener('submit',validation);