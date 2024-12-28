window.addEventListener("DOMContentLoaded", () => {
    const inputContraseña = document.getElementById("mostrarContraseña");
    const botonCopiar = document.getElementById("botonCopiar");
    const nivelSeguridad = document.getElementById("nivelSeguridad");
    const longitudSlider = document.getElementById("longitudcontraseña");
    const valorLongitud = document.getElementById("valorLongitud");
    const botonGenerar = document.getElementById("botonGenerar");
    
    // Checkboxes for character types
    const incluirMayusculas = document.getElementById("incluirMayusculas");
    const incluirMinusculas = document.getElementById("incluirMinusculas");
    const incluirNumeros = document.getElementById("incluirNumeros");
    const incluirSimbolos = document.getElementById("incluirSimbolos");

    // Character sets
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Update length display
    longitudSlider.addEventListener("input", () => {
        valorLongitud.textContent = longitudSlider.value;
    });

    function actualizarNivelSeguridad(contraseña) {
        let puntaje = 0;
        if (contraseña.match(/[A-Z]/)) puntaje += 25;
        if (contraseña.match(/[a-z]/)) puntaje += 25;
        if (contraseña.match(/[0-9]/)) puntaje += 25;
        if (contraseña.match(/[^A-Za-z0-9]/)) puntaje += 25;

        nivelSeguridad.style.width = puntaje + "%";
        
        if (puntaje <= 25) nivelSeguridad.style.backgroundColor = "#e74c3c";
        else if (puntaje <= 50) nivelSeguridad.style.backgroundColor = "#f1c40f";
        else if (puntaje <= 75) nivelSeguridad.style.backgroundColor = "#3498db";
        else nivelSeguridad.style.backgroundColor = "#2ecc71";
    }

    function generarContraseña() {
        let caracteres = "";
        if (incluirMayusculas.checked) caracteres += mayusculas;
        if (incluirMinusculas.checked) caracteres += minusculas;
        if (incluirNumeros.checked) caracteres += numeros;
        if (incluirSimbolos.checked) caracteres += simbolos;

        if (caracteres === "") {
            alert("Debes seleccionar al menos un tipo de caracteres");
            return;
        }

        let contraseña = "";
        const longitud = longitudSlider.value;

        for (let i = 0; i < longitud; i++) {
            contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        inputContraseña.value = contraseña;
        actualizarNivelSeguridad(contraseña);
    }

    botonGenerar.addEventListener("click", generarContraseña);

    botonCopiar.addEventListener("click", () => {
        if (inputContraseña.value === "Tu Contraseña aparecerá Aquí") {
            return;
        }
        navigator.clipboard.writeText(inputContraseña.value)
            .then(() => {
                botonCopiar.textContent = "¡Copiado!";
                setTimeout(() => {
                    botonCopiar.textContent = "Copiar";
                }, 2000);
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    });

    // Generate initial password
    generarContraseña();
});