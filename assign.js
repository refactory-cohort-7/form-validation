/* const fName = document.tuesday.field1;
const fEmail = document.tuesday.field2;
const fPhone1 = document.tuesday.tel_no_1;
const fPhone2 = document.tuesday.tel_no_2;
const fPhone3 = document.tuesday.tel_no_3;
const fRegarding = document.tuesday.field4;
const fMessage = document.tuesday.field5;

let nameFocus = () => {
    fName.style.border = '2px solid gold';
}
 */
// fName.addEventListener('focus',nameFocus);
// fName.addEventListener('blur',nameFocus)

let userName_func = () => {
    var username = document.candidate_info.field1;
    //Validation for the name
    if (username.value == '') {
        username.style.border = '2px solid red';
        username.focus();
        return false;
    }
    const min = 4;
    if (username.value.length < min) {
        username.focus();
        username.style.border = '2px solid red';
        alert('Your name should have more than four characters!');
        return false;
    }
}

// Regular expressions(regex)
// Should start with /^ 
// Followed by the characters required i.e A-Z for capital letters, a-z for small letters
// + sign represents nothing
// Buyondo (Buy,on,do)
//     const letters = /^[A-Za-z]+$/;
//     if (name1.value.match(letters)) {
//         return true;
//     } else {
//         name1.focus();
//         name1.style.border = '2px solid red';
//         alert('Please ensure your name has only letters!');
//         return false;
//     }
// };

// let myemail = () => {
//     var email = document.tuesday.field2;
//     //Validation of the email
//     if (email.value == '') {
//         email.style.border = '2px solid red';
//         email.focus();
//         return false;
//     }

//     // Email REGEX
//     const emailx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     const UG = /^UG+[A-Z a-z]+$/;
//     // osmanbuyondo@gmail.com  has 3 sections osmanbuyondo, @gmail & .com sections
//     // the section with () gets attention first
//     // the * is an emphasis that there is nothing more or less
//     // FOR Spaces /^[a-zA-Z].*[\s\.]*$/


//     if (email.value.match(emailx)) {
//         return true;
//     } else {
//         email.focus();
//         email.style.border = '2px solid red';
//         alert('Please ensure your email is correct!');
//     }
// }

// let mytelephone = () => {
//     var telephone = document.tuesday.tel_no_1;

//     // shows that numbers should only be from 0 to 9 and nothing else
//     let telephoneplain = /^[0-9]+$/;

//     // This regex will allow one to include the + sign 
//     let telephonex = /^[0-9a-zA-Z]+$/;
//     //Validation of the email
//     if (telephone.value == '') {
//         telephone.style.border = '2px solid red';
//         telephone.focus();
//     }
// }

let validation = () => {
    userName_func();
    // myemail();
    // mytelephone();
};

document.candidate_info.addEventListener('submit', validation);