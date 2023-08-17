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

        if (user.value && pass.value && (pass.value.length >= 6)) {
            alert("Logueado correctamente");
            localStorage.setItem('isLoggedIn', 'true');
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000);
        } else { 
            if (!user.value) {
                alert("Debes llenar el campo Usuario");
            } else {
                if (pass.value.length < 6) {
                    alert("La contraseña debe tener 6 caracteres o más");
                } else {
                    alert("Debes ingresar una contraseña");
                }
            }   
        }
    });



/* Verificación formulario de Registro */

    const btnsubr = document.getElementById("btn-submitreg");

    btnsubr.addEventListener("click", function(event) {
        event.preventDefault();

        const npass = formreg.querySelector("#newpass");
        const confpass = formreg.querySelector("#confpass");
        const ndep = formreg.querySelector("#Departamento");

        if (npass.value === confpass.value && ndep.value !== "") {
            alert("Registrado con éxito");
        } else {
            if (npass.value !== confpass.value) {
                alert("Las contraseñas no son iguales");
            } else {
                if (ndep.value === "") {
                    alert("Debes elegir un departamento");
                }
            }
        }
    });
});