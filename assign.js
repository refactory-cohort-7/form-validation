// Declaring variables.
const user_name= document.assignForm.field1;
const user_email = document.assignForm.field2;
const user_phone = document.assignForm.field3;
const about = document.assignForm.field4;

// Declaring function UserNameFunction.
const userNameFunction = () => {
  const min = 5;
  const letters = /^[A-Za-z]+$/; // Regular expression that allows the name to only have letters.
/**Condition statement that will throw an alert if name is not filled.
 Will highlight the borders red. 
**/
  if (user_name.value == '') {
    alert('Please fill-in your name!'); 
    user_name.style.border = '2px solid red';
    user_name.focus();
  } else {
    if (user_name.value.length < min) {
    user_name.focus();
      user_name.style.border = '2px solid red';
      alert('Your name should have more than five characters!');
    } else {
      if (!user_name.value.match(letters)) {
        user_name.focus();
        user_name.style.border = '2px solid red';
        alert('Please ensure your name has only letters!');
        return false;
      } // Allows only alphabetical characters.
      return true;
    } // Allows a minimum of 5 characters.
    return true;
  } // Checks if field is empty.
  return true;
};
// Declaring function.
const userEmailFunction = () => {
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Regular expression for the email format.
  if (user_email.value === '') {
    user_email.style.border = '2px solid red'; // Highlights border red.
    user_email.focus();
    alert('Please fill-in your email!');
  } else {
    if (!user_email.value.match(email)) {
      user_name.focus();
      user_email.style.border = '2px solid red';
      alert('Please ensure your email is correct!');
    } else {
      return true;
    } // Checks if the email is in the right format.
    return true;
  } // Checks if email field is empty.
  return true;
};
// Defining the function userPhone.
const userPhone = () => {
const user_phone1 = /^\+[0-9]+$/; // Regular expression to dictate that the phone number starts with a + followed by only numbers.

 /**
  Condition statement that requires an alert be thrown if phone left empty.
  Also throws an alert if the phone number is incorrect.
  Also highlights the borders red.
  **/
  if (user_phone.value === '') {
    user_phone.style.border = '2px solid red';
    user_phone.focus();
    alert(`Please fill in your phone number`);
  } else {
    if (!user_phone.value.match(user_phone1)) {
      alert(`Please put a correct phone number starting with +256`);
      user_phone.style.border = '2px solid red';
      return false;
      
    } else {
      // This dictates the length of phone number.
      if (user_phone.value.length !== 13) {
      
        alert(
          'Please enter only 13 characters'
        );
        user_phone.focus();
        user_phone.style.border = '2px solid red';
        return false;
      } // Ensures only 13 charaters are filled in.
      return true;
    } // Ensures the value is the form +XXX; Where the X must be a number.
    return true;
  } // Checks if fPhone1 field is empty!

  
  return true;
};

const userAbout = () => {
 
  const wordNum = (message) => {
    message.split(' ').length;

  }
  const numWords = wordNum (about.value);
  // Condition for the about field not to be more than 50 words.
if(numWords > 50 ){
  alert("please enter only 50 words.");
  about.style.border = '2px solid red';
  return false;
}

  
    return true;
  } 
  
// Encompasses other functions; All the calls are handled as 1 call.
const validation = () => {
  userNameFunction();
  userEmailFunction();
  userPhone();
  userAbout();
};
// Event listener that listens to submit.
document.assignForm.addEventListener('submit', validation); // Watches the validity of data filled in.



