let button = document.getElementById("button");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let check = document.getElementById("terminos");
let btncheck = document.getElementById("btnCheck");


function validData(dato) {
    if (dato.value.length == 0) {
        dato.classList.add("is-invalid")
    }
    else { 
        dato.classList.add("is-valid")
    }
}

function validPassword() {

    if (pass1.value.length < 6) {
        pass1.classList.add("is-invalid")
        pass2.classList.add("is-invalid")
    }
    else {
        pass1.classList.add("is-valid")
    }

    if (pass2.value == pass1.value && pass1.value.length >= 6) {
        pass2.classList.add("is-valid")
        pass1.classList.add("is-valid")
    }
    else {
        pass2.classList.add("is-invalid")
    }

}

function validCheck() {
    if (check.checked == false) {
        btncheck.classList.add("is-invalid")
        btncheck.style.color = "red"
        check.classList.add("is-invalid")
    }
    else {
        btncheck.classList.add("is-valid")
        check.classList.add("is-valid")
        btncheck.style.color = "green"
    }
}

function validEmail() {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (email.value.length > 0 && validEmail.test(email.value)) {
        email.classList.add("is-valid")
    }
    else {
        email.classList.add("is-invalid")
    }

}

function validaDataInput(input) {
    validData(input);
    input.addEventListener("input", () => {
        input.classList.remove("is-valid")
        input.classList.remove("is-invalid")
        validData(input);
    });
}

function validaEmailInput() {
    validEmail();
    email.addEventListener("input", () => {
        email.classList.remove("is-valid")
        email.classList.remove("is-invalid")
        validEmail();
    });
}

function validaPassInput(passw1,passw2) {
    validPassword();
    passw1.addEventListener("input", () => {
        passw1.classList.remove("is-invalid")
        passw1.classList.remove("is-valid")
        passw2.classList.remove("is-invalid")
        passw2.classList.remove("is-valid")
        validPassword();

    });
}

function validaBtnCheck() {
    validCheck()
    check.addEventListener("change", () => {  
        check.classList.remove("is-invalid")
        check.classList.remove("is-valid")
        btncheck.classList.remove("is-invalid")
        btncheck.classList.remove("is-valid")
        validCheck()
    });
}

function showAlertSuccess(){
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

button.addEventListener("click", () => {
    validaDataInput(nombre);
    validaDataInput(apellido);
    validaEmailInput();
    validaPassInput(pass1, pass2);
    validaPassInput(pass2, pass1);
    validaBtnCheck();

    if(nombre.classList.contains("is-valid") && apellido.classList.contains("is-valid") && email.classList.contains("is-valid") && pass1.classList.contains("is-valid") && pass2.classList.contains("is-valid") && check.classList.contains("is-valid") ){
     showAlertSuccess()
    } else {
     showAlertError()
    }

});





