window.addEventListener("load", () => {
    var marcador = document.getElementById("scoreboard");
    var resultado = document.getElementById("result");
    var botonPiedra = document.getElementById("piedra");
    var botonPapel = document.getElementById("papel");
    var botonTijera = document.getElementById("tijera");
    var botonReset = document.getElementById("reset");

    var puntuacionJugador = 0;
    var puntuacionIA = 0;

    function actualizarMarcador() {
        marcador.innerHTML = `
            Jugador: ${puntuacionJugador} <br>
            IA: ${puntuacionIA}
        `;
    }

    actualizarMarcador();

    botonPiedra.addEventListener("click", function () {
        comparar("piedra");
    });
    botonPapel.addEventListener("click", function () {
        comparar("papel");
    });
    botonTijera.addEventListener("click", function () {
        comparar("tijera");
    });

    botonReset.addEventListener("click", function () {
        puntuacionJugador = 0;
        puntuacionIA = 0;
        resultado.innerHTML = "¡El juego ha sido reiniciado!";
        actualizarMarcador();
    });

    function eleccionpc() {
        var opciones = ["piedra", "papel", "tijera"];
        var eleccion = Math.floor(Math.random() * 3);
        return opciones[eleccion];
    }

    function comparar(eleccion) {
        var pc = eleccionpc(); 
        if (eleccion == pc) {
            resultado.innerHTML = `Empate. Ambos eligieron ${eleccion}.`;
        } else if (
            (eleccion == "piedra" && pc == "tijera") ||
            (eleccion == "papel" && pc == "piedra") ||
            (eleccion == "tijera" && pc == "papel")
        ) {
            resultado.innerHTML = `¡Ganaste! Elegiste ${eleccion}, la IA eligió ${pc}.`;
            puntuacionJugador++;
        } else {
            resultado.innerHTML = `Perdiste. Elegiste ${eleccion}, la IA eligió ${pc}.`;
            puntuacionIA++;
        }
        actualizarMarcador(); 
    }
});
