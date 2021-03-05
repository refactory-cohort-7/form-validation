// Validation
// Name not empty less than 4, no numbers , only letter characters.

// Email
// no empty
// must be valid.

// phone
// no empty, letters and numbers,

// about
// not exceed 50 words.
// can empty

const appName = document.custInform.field1; // Points to the name field in HTML.
const appEmail = document.custInform.field2; // Points to the email field in HTML.
const appPhone = document.custInform.field3; // Points to the phone field in HTML.
const appAbout = document.custInform.field4; // Points to the about field in HTML.
const appAboutSchool = document.custInform.field6; // Points to the about school field in HTML.

const appNameInfo = document
  .getElementById('name_field')
  .querySelector('.field1_info'); // Points to the name paragraph for info in HTML.
const appEmailInfo = document
  .getElementById('email_field')
  .querySelector('.field2_info'); // Points to the email paragraph for info in HTML.
const appPhoneInfo = document
  .getElementById('phone_field')
  .querySelector('.field3_info'); // Points to the phone paragraph for info in HTML.
const appAboutInfo = document
  .getElementById('about_field')
  .querySelector('.field4_info'); // Points to the about paragraph for info in HTML.
const appAboutSchoolInfo = document
  .getElementById('aboutSch_field')
  .querySelector('.field6_info'); // Points to the about school paragraph for info in HTML.

/** Validates the value fill-in the name field. */
const nameFunction = () => {
  const min = 4; // minimum character number;
  const letters = /^[A-Z a-z]+$/; // Only English alphabetical letters allowed.

  // Is name field empty?
  if (appName.value === '') {
    // if true; complain by:
    appName.style.border = '2px solid red'; // Attracting attention.
    appName.focus(); // Focussing on the part with problem.
    appNameInfo.textContent = `Please fill-in your name!`; // Display informing message.
  } else {
    // Ensures the name field has more than 3 characters.
    if (appName.value.length < min) {
      appName.focus();
      appName.style.border = '2px solid red';

      appNameInfo.textContent = 'More than 3 characters required!'; // Display informing message.
    } else {
      // Ensures only alphabetical characters are fill-in.
      if (!appName.value.match(letters)) {
        appName.focus();
        appName.style.border = '2px solid red';
        appNameInfo.textContent = 'Only letters allowed!'; // Display informing message.
        return false; // Prevents submission of wrong data.
      }
      return true; // Gives a go ahead;
    }
    return true; // Gives a go ahead.
  }
  return true; // Allow to proceed since everything is correct returning true.
};

// Validates the email.
const emailFunction = () => {
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Dictates the email format.

  // checks if the email field is empty.
  if (appEmail.value === '') {
    // if yes! complain by:
    appEmail.style.border = '2px solid red'; // Attracting attention.
    appEmail.focus(); // Keeping this field focussed.
    appEmailInfo.textContent = 'Please fill-in your email!'; // Display informing message.
  } else {
    // Check if the email value is not a correct format.
    if (!appEmail.value.match(email)) {
      // if yes! complain by:
      appEmail.focus(); // Keeping this field focussed.
      appEmail.style.border = '2px solid red'; // Attracting attention.
      appEmailInfo.textContent = 'Wrong email, Please Correct!'; // Display informing message.
    } else {
      return true; // Allow to proceed.
    } // Checks if the email is in the right format.
    return true; // Allow to proceed.
  } // Checks if email field is empty.
  return true; // Allow to proceed since everything is correct returning true.
};

const phone = () => {
  const phoneFormPlus = /^\+[0-9]+$/; // Allows use of '+' and numbers!

  // Phone validation; Starting with checking if Phone field is empty!, then;
  if (appPhone.value === '') {
    appPhone.style.border = '2px solid red'; // Attract attention.
    appPhone.focus(); // Keep the field on focus.
    appPhoneInfo.textContent = `Phone number required!`;
    // Display informing message.
  } else {
    // Checks if the phone number format is correct.
    if (appPhone.value.match(phoneFormPlus)) {
      // Checks if the charater number is not 13;
      if (appPhone.value.length !== 13) {
        appPhoneInfo.textContent = `Only 12 numbers allowed!`;
        // Display informing message. To include '+'; 13 characters are allowed.
        appPhone.focus(); // Keep the field on focus.
        return false; // Prevents submission of the data.
      }
    } else {
      // Format not correct! then complains by:
      appPhone.style.border = '2px solid red'; // Attracting attention.
      appAboutInfo.textContent = `Should be like +2567XXXXXXXX`; // Displays informing message. Shows expected format.
      return false; // Preventing submission wrong data.
    }
    return true; // Allow to proceed;
  }

  return true; // Allow to proceed since everything is correct returning true.
};

/** countWord takes a sting; splits it at spaces; then returns an array of string pieces; which items are counted using .length of the returned array; Returns number of words in the string; Accessed by 2 functions. */
const countWords = (str) => str.split(' ').length;

const about = () => {
  // Storing the result of calling countWords. So that i can use it in decision making.
  const numWordsAbout = countWords(appAbout.value); // Passes about value as an arjument.

  /** Ensures the string has words not exceeding 50. */
  if (numWordsAbout > 50) {
    appAbout.style.border = '2px solid red'; // Attract attention.
    appAboutInfo.textContent = 'Only 50 words allowed.'; // Display informing message.
    return false; // stops submission of value.
  }

  return true; // Allow to proceed since everything is correct returning true.
};

const aboutSchool = () => {
  // Storing the result of calling countWords. So that i can use it in decision making.
  const numWordsAboutSch = countWords(appAboutSchool.value);

  /** Ensures the string has words not exceeding 100. */
  if (numWordsAboutSch > 100) {
    appAboutSchool.style.border = '2px solid red'; // Attract attention.
    appAboutSchoolInfo.textContent = 'Only 100 words allowed.'; // Display informing message.
    return false; // prevents submission of wrong data.
  }
  return true; // Allow to proceed since everything is correct returning true.
};

// Encompasses other functions; All the calls are handled as 1 call.
const validation = () => {
  nameFunction();
  emailFunction();
  phone();
  about();
  aboutSchool();
};

document.custInform.addEventListener('submit', validation); // Watches the validity of data filled in.
