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

