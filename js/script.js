const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent =
        "HTML, CSS y JavaScript trabajan juntos para construir una página web.";
});
