const formN = document.formName.field1;
const formE = document.formName.field2;
const formPhone = document.formName.field3;
const formAboutMySelf = document.formName.field4;
const formInterests = document.formName.field5;
const formAboutMySchool = document.formName.field6;

let nameCheck = () => {
    if(formN.value == ''){
        formN.focus();
        formN.style.border = '2px solid red';
        alert("Please type something in the name field");
        return true
    }
}

let validation = () => {
    nameCheck();
}

document.formName.addEventListener('submit',validation);