// Dom to Html
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// function show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// function show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

// function check requied to for each loop or arry
function checkRequried(inputArry) {
    inputArry.forEach(function (input) {
        // if statment
        if (input.value === '') {
            showError(input, `${getInputId(input)} is requried`);
        } else {
            showSuccess(input);
        }
    })
};

// function check email vaild
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getInputId(input)} Please enter valid Email `);
    }
};

// function check length or password
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${getInputId(input)} need to be at least ${min} characters`);
    } else if( input.value.length > max){
        showError(input, `${getInputId(input)} need to be at least ${max} characters`);
    }else{
        showSuccess(input);
    };
};

//function to check password match
function checkMatchPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Password to dn't Match" );
    };
};

// function  input.id to upper case or slice
function getInputId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// add event listener
form.addEventListener('submit', function (e) {
    // stop reload web page
    e.preventDefault();

    checkRequried([username, email, password, password2]);
    checkEmail(email);
    checkLength(username,3,10);
    checkLength(password,6,40);
    checkMatchPassword(password,password2);
});

