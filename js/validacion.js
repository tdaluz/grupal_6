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
    }
    else {
        pass1.classList.add("is-valid")
    }

        if (pass2.value == pass1.value && pass1.value.length >= 6) {
            pass2.classList.add("is-valid")
        }
        else {
            pass2.classList.add("is-invalid")
        }
    
}
/////
function validCheck(){
    if (check.checked == false){
        btncheck.classList.add("is-invalid")
        btncheck.style.color = "red"
        check.classList.add("is-invalid")
    }
    else {
        btncheck.classList.add("is-valid")
        check.classList.add("is-valid")
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
/////////
button.addEventListener("click", () => {
    validData(nombre);
    validData(apellido);
    validEmail()
    validPassword()
    validCheck();


    nombre.addEventListener("input", () => {
        nombre.classList.remove("is-valid")
        nombre.classList.remove("is-invalid")
        validData(nombre);
    });

    apellido.addEventListener("input", () => {
        apellido.classList.remove("is-valid")
        apellido.classList.remove("is-invalid")
        validData(apellido);
    });

    email.addEventListener("input", () => {
        email.classList.remove("is-valid")
        email.classList.remove("is-invalid")
        validEmail()
    });

    pass1.addEventListener("input", () => {
        pass1.classList.remove("is-invalid")
        pass1.classList.remove("is-valid")
        validPassword();
    });

    pass2.addEventListener("input", () => {
        pass2.classList.remove("is-invalid")
        pass2.classList.remove("is-valid")
        validPassword();
    });

    btncheck.addEventListener("change", () => {  
        btncheck.classList.remove("is-invalid")
        btncheck.classList.remove("is-valid")
        validCheck();
    });
   

});





