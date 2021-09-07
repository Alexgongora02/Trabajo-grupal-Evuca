const form = document.querySelector('.formulario')
const user = document.querySelector('#usuario')
const loginName = document.querySelector('#nombre')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm')
const email = document.querySelector('#email')
const phone = document.querySelector('#telefono')

form.addEventListener("submit", function(e) {
    let errorCheck = 0;
    let usernameError = document.querySelector('#username-error');
    let nameError = document.querySelector('#name-error');
    let passwordError = document.querySelector('#password-error');
    let confirmError = document.querySelector('#confirm-error')
    let emailError = document.querySelector('#email-error');
    let phoneError = document.querySelector('#phone-error');
    let terminos = document.querySelector('#terminos')
    
    usernameError.innerHTML = '';
    usernameError.style.color = '#ff0000';
    nameError.innerHTML = '';
    nameError.style.color = '#ff0000';
    passwordError.innerHTML = '';
    passwordError.style.color = '#ff0000';
    confirmError.innerHTML = '';
    confirmError.style.color = '#ff0000';
    emailError.innerHTML = '';
    emailError.style.color = '#ff0000';
    phoneError.innerHTML = '';
    phoneError.style.color = '#ff0000';
    if(user.value.length > 10 || user.value.length < 4) {
        usernameError.innerHTML = 'Debe tener entre 4 y 10 carácteres';
        errorCheck ++;
    }
    
    if (user.value.match(/[^a-zA-Z0-9 ]/g)) {
        usernameError.innerHTML = 'Solo se permiten letras y números';
        errorCheck ++;
    }
    
    if (loginName.value.match(/[^a-zA-Z0-9 ]/g)) {
        nameError.innerHTML = 'Solo se permiten letras y números';
        errorCheck ++;
    }

    if(password.value !== confirmPassword.value) {
        confirmError.innerHTML = 'Las contraseñas no coinciden';
        errorCheck ++;
    }

    if(password.value.length < 6 || password.value.length > 15) {
        passwordError.innerHTML = 'Debe tener entre 6 y 15 carácteres';
        errorCheck++;
    }

    if(!email.value.match(/^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/)) {
        emailError.innerHTML = 'Email no válido';
        errorCheck++;
    }

    if(!phone.value.match(/^((\(?\d{3}\)? \d{4})|(\(?\d{4}\)? \d{3})|(\(?\d{5}\)? \d{2}))\d{4}$/gm)) {
        phoneError.innerHTML = 'Número no válido';
        errorCheck++;
    }

    if (errorCheck > 0) {
        e.preventDefault();
    }

    if (errorCheck == 0 ){
        e.preventDefault();
        user.value = ""
        loginName.value = ""
        password.value = ""
        confirmPassword.value = ""
        email.value = ""
        phone.value = ""
        $('input[type=checkbox]').prop('checked',false);
        swal("Gracias por registrarte!", "Nos contactaremos contigo lo mas pronto posible.", "success");
    }
});