let userName_func = () => {
    var username = document.candidate_info.field1;
    const username_minimum = 5;

    //Validation for the name
    if (username.value == '') {
        username.style.border = '2px solid red';
        username.focus();
        return false;
    }

    if (username.value.length < username_minimum) {
        username.focus();
        username.style.border = '2px solid red';
        alert('Your name should have more than four characters!');
        return false;
    }

    if (username.value == '' && username.value.length > username_minimum && username.value.match(letters)) {
        username.style.border = '2px solid green';
    }

    const letters = /^[A-Za-z]+$/;
    if (username.value.match(letters)) {
        return true;
    } else {
        username.focus();
        username.style.border = '2px solid red';
        alert('Please ensure your name has only letters!');
        return false;
    }

    if (username.value == '' && username.value.length > username_minimum && username.value.match(letters)) {
        username.style.border = '2px solid green';
    }


}

//Function to handle email validation.
let userEmail_func = () => {
    var user_email = document.candidate_info.field2;
    if (user_email.value == '') {
        user_email.style.border = '2px solid red';
        user_email.focus();
        return false;
    }

    // Email REGEX
    const email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const UG = /^UG+[A-Z a-z]+$/;


    if (user_email.value.match(email_format)) {
        return true;
    } else {
        user_email.focus();
        user_email.style.border = '2px solid red';
        alert('Please ensure your email is correct!');
    }
}

//Function to validate phone field.
let tel_phone_func = () => {
    var telephone = document.candidate_info.phone_field;

    // shows that numbers should only be from 0 to 9 and nothing else
    let telephone_format = /^[0-9]+$/;

    // This regex will allow one to include the + sign 
    let tel_format2 = /^[0-9a-zA-Z]+$/;

    if (telephone.value == '') {
        telephone.style.border = '2px solid red';
        telephone.focus();
        return false;
    }
}

//Function to validate the About field
let about_func = () => {
    var about_user = document.candidate_info.about_field;

    str1 = about_user.value;
    //exclude  start and end white-space
    str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1  
    str1 = str1.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing  
    str1 = str1.replace(/\n /, "\n");
    var num_of_words = str1.split(' ').length;

    if (num_of_words < 4) {
        alert("less than 4");

    } else {
        alert("more than 5")
    }

}



let validation = () => {
    userName_func();
    userEmail_func();
    tel_phone_func();
    about_func();
};

//document.candidate_info.addEventListener('submit', validation);