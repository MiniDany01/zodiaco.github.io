// Asegúrate de que el código JS se ejecute una vez que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el botón de envío
    let sendButton = document.getElementById("send");
    let enter = document.getElementById("input-signo");
    let btnMail = document.getElementById("btn-email");

    // Añade el evento click al botón
    sendButton.addEventListener("click", function() {
        asignarSigno(); // Llama a la función que verifica el signo
    });

    enter.addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
            asignarSigno();
        }
    });

    btnMail.addEventListener("click", function() {
        validarEmail();
    });
});

function asignarSigno() {
    let signo = document.getElementById("input-signo").value.trim().toLowerCase();

    switch (signo) {
        case "geminis":
            alert("Tom Holland es tu alma gemela");
            window.location.href = "geminis.html";
        break;

        case "cancer":
            alert("Danna Paola es tu alma gemela");
            window.location.href = "cancer.html";
        break;

        case "acuario":
            alert("The Weeknd es tu alma gemela");
            window.location.href = "acuario.html";
        break;

        case "picis":
            alert("Bad Bunny es tu alma gemela");
            window.location.href = "picis.html";
        break;

        case "leo":
            alert("Kylie Jenner es tu alma gemela");
            window.location.href = "leo.html";
        break;

        case "virgo":
            alert("Zendaya es tu alma gemela");
            window.location.href = "virgo.html";
        break;

        case "libra":
            alert("Bruno Mars es tu alma gemela");
            window.location.href = "libra.html";
        break;

        case "sagitario":
            alert(" es tu alma gemela");
            window.location.href = "sagitario.html";
        break;

        case "capricornio":
            alert("Timothée Chalamet es tu alma gemela");
            window.location.href = "capricornio.html";
        break;

        case "aries":
            alert("Luis Miguel es tu alma gemela");
            window.location.href = "aries.html";
        break;

        case "tauro":
            alert("Robert Pattinson es tu alma gemela");
            window.location.href = "tauro.html";
        break;

        case "escorpio":
            alert("Kendall Jenner es tu alma gemela");
            window.location.href = "escorpio.html";
        break;

        default:
            alert("No existe ese signo");
    }
}

function validarEmail() {
    let email = document.getElementById("email").value;
    const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegax.test(email)) {
        alert("Gracias por suscrbirte a esta página");
    } else {
        alert("Este correo electronico no es valido");
    }
}