/* Mostrar un formulario u otro */

const btnlog = document.getElementById("btn-log");
const btnreg = document.getElementById("btn-reg");
const formlog = document.getElementById("form-log");
const formreg = document.getElementById("form-reg");

btnlog.addEventListener("click", function () {
    formlog.style.display = "block";
    formreg.style.display = "none";
})

btnreg.addEventListener("click", function () {
    formreg.style.display = "block";
    formlog.style.display = "none";
})

formlog.style.display = "block";
formreg.style.display = "none";


/* Redireccion a index con login realizado */

document.addEventListener("DOMContentLoaded", function() {

    const btnsub = document.getElementById("btn-submitlog");
    const form = document.querySelector("#form-log form");

    btnsub.addEventListener("click", function (event) {
        event.preventDefault();

        const user = form.querySelector("#User");
        const pass = form.querySelector("#Pass");

        if (user.value && pass.value) {
            alert("Logueado correctamente");
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000);
        } else { 
            if (!user.value) {
                alert("Debes llenar el campo Usuario");
            } else {
            alert("Debes ingresar una contraseña");
            }   
        }
        });
});