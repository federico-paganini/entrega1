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