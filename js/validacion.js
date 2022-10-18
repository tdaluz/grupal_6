let button = document.getElementById("button");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let check = document.getElementById("terminos");
let btncheck = document.getElementById("btnCheck");




function validData(dato){
    if (dato.value.length == 0){
        dato.classList.toggle("is-invalid")
    }
    else {
        dato.classList.toggle("is-valid")
    }
}

function validPassword(){
    if (pass1.value.length < 6){
        pass1.classList.toggle("is-invalid")
    }
    else {
        pass1.classList.toggle("is-valid")
        if (pass2.value == pass1.value){
            pass2.classList.toggle("is-valid")
        }
        else {
            pass2.classList.toggle("is-invalid")
        }
    }
}

function validCheck(){
    if (check.checked == false){
        btnCheck.classList.toggle("is-invalid")
        btncheck.style.color = "red"
        check.classList.toggle("is-invalid")
    }
    else {
        btnCheck.classList.toggle("is-valid")
        check.classList.toggle("is-valid")
    }
} 

button.addEventListener("click", () => {  
    validData(nombre);
    validData(apellido);
    validData(email);
    validPassword()
    validCheck();
});
