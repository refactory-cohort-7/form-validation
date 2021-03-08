let inputName = () => {
  var name2 = document.hazel.field1;
  // if is left void border should turn red
  if (name2.value == "") {
    name2.style.border = "2px solid red";
    name2.focus();
    return false;
  }
};
let validation = () => {
  inputName();
};
//am informing the
document.hazel.addEventListener("submit", validation);

let email = () => {
  var email2 = document.hazel.field2;
  // if is left void border should turn red
  if (email2.value == "") {
    email2.style.border = "2px solid yellow";
    email2.focus();
    return false;
  }
};
