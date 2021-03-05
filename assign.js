var firstName = document.signup.field1;

let userName = () =>{
    if (firstName.value == ''){
        firstName.style.border = '2px solid red';
        firstName.focus();
        alert('Please fill in your name');
        
    }
    const min = 4;
    if (firstName.value.length < min){
        firstName.focus();
        firstName.style.border = '2px solid red';
        alert ('Your name should have more than four characters.');
    } if (firstName.value.length > min){
        firstName.style.border = 'none';

    }
    const letters = /^[A-Za-z]+$/;
    if (firstName.value.match(letters)){
        
    }
    else {
        firstName.focus();
        firstName.style.border = '2px solid red';
        alert('Please use only letters.');
    }
}

let userEmail = () =>{
    var email = document.signup.field2;
    if(email.value = ''){
        email.style.border = '2px solid red';
        email.focus();
    }
    const emailAddress =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(emailAddress)){
    } 
    else{
        email.focus();
        email.style.border = '2px solid red';
       alert('Please make sure your email is correct.');
    }
}

let phoneNumber = () =>{
    var telephone = document.signup.tele;
    const telephoneplain = /^[0-9a-zA-Z]+$/;
    if (telephone.value.match(telephoneplain)){
    }
    else {
        telephone.focus();
        telephone.style.border = '2px solid red';
        alert('Please enter a valid phone number.')
    }
    
}
let aboutYou = () =>{
    var message = document.signup.about;
    if(message.value === ''){
        message.style.border = '2px solid red';
        alert('Please write about yourself.');
        message.focus();
    }
    else{
        return true;
    }
    
}

let Validation = () =>{
    userName();
    userEmail();
    phoneNumber();
    aboutYou();
}