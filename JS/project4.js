console.log('This is project 4');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;

//console.log(name, email, phone);
name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str = name.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your Name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
    }
});
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2, 7}$/;
    let str = email.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
    }
});
phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked submit');
    if (validEmail && validPhone && validUser){
        console.log('Details are valid');
        let success = document.getElementById('success');
        success.classList.add('show');
        let failure = document.getElementById('failure');
        failure.classList.remove('show');
    }
    else{
        console.log('Please check details');
        let success = document.getElementById('success');
        success.classList.remove('show');
        let failure = document.getElementById('failure');
        failure.classList.add('show');

    }
    
});


