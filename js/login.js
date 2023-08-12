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