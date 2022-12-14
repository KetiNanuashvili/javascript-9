//validation
let RegistrationForm=document.getElementById('registration-form');

RegistrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    let errors={

    };
    let formElement=event.target;

    //username
    let usernameValue = document.getElementById('username').value;

    if (usernameValue==""){
        errors.myusername="Username field can not be empty"
    }
    if (usernameValue.length <5){
         errors.myusername="Username field can not be empty"
    }

    //password
    let password1 = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password1 == ""){
        errors.mypassword ='Password field can not be empty'
    }
    if (password1!=password2){
        errors.mypassword2='Password do not match';

    }

    //radio
    let age = false;
    formElement.querySelectorAll('[name="age"]').forEach(item => {
        if (item.checked){
            age = true;
        }
    });
    
    // როცა ისევ მინდა რომ დარჩეს false
    if(!age){
        errors.age ="Please select your age";
    }

    //checkbox
    let agree = document.getElementById("agree").checked;

    if (!agree){
        errors.agree = "YOU MUST AGREE OUR TERMS CONDITIONS";
    }

formElement.querySelectorAll('.error-text').forEach(item => {
        item.innerHTML="";
});

    for (let item in errors){
        let spanError =document.getElementById('error_' + item);
        if(spanError){
            spanError.textContent =errors[item];
        }
    }

    if (Object.keys(errors).length==0){
        formElement.submit();
     }
});

//show hide password

let passwordField = document.getElementById('showHide');
let toggleIcon = document.getElementById('toggleIcon');

toggleIcon.addEventListener('click', function(){
    if(passwordField.type =="password"){
        passwordField.setAttribute('type', 'text');
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }else{
        passwordField.setAttribute('type', 'password');
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
})

//emailregex

let emailField = document.getElementById('myemail');

emailField.addEventListener('keydown', function(){
    let emailValue =document.getElementById('myemail').value;
    let text=document.getElementById('text');
    let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue.match(pattern)){
        emailField.style.border ="2px solid green";
        text.innerText='Your email is valid';
        text.style.color = 'green';

    }else{
        emailField.style.border ="2px solid red";
        text.innerText='Your email is invalid';
        text.style.color = 'red';
    }
})
