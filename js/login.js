/* Mostrar un formulario u otro */

const btnlog = document.getElementById("btn-log");
const btnreg = document.getElementById("btn-reg");
const formlog = document.getElementById("form-log");
const formreg = document.getElementById("form-reg");
const btn = document.getElementById("btn");

btnlog.addEventListener("click", function () {
    formlog.style.left= "0";
    formreg.style.left = "775px";
    btn.style.left= "0";
})

btnreg.addEventListener("click", () => {
    formlog.style.left= "-700px";
    formreg.style.left = "0px";
    btn.style.left= "270px";
})


/* Redireccion a index con login realizado */

document.addEventListener("DOMContentLoaded", function() {

    const btnsub = document.getElementById("btn-submitlog");
    const form = document.querySelector("#form-log");

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


