//FullPage
var myFullpage = new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: false,
    paddingTop: '100px',
    paddingBottom: '60px',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    responsiveHeight: 700,

});
  
async function guardarDatosPersona() {
    const nombre = document.getElementById("FormControlInputName").value;
    const apellido = document.getElementById("FormControlInputApellido").value;
    const email = document.getElementById("FormControlInputEmail").value;
    const cv = document.getElementById("formFileCV").files[0];
    const mensaje = document.getElementById("FormControlTextarea").value;

    const persona = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        cv: cv ? cv.name : "No se adjuntó CV",
        mensaje: mensaje,
    };

    try {
        // Enviar los datos al servidor
        const response = await fetch("http://localhost:3000/guardar-persona", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(persona)
        });

        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        
        const data = await response.json();
        console.log("Datos guardados en el servidor:", data);
        
        mostrarToastify("Datos enviados correctamente", "linear-gradient(to right, #00b09b, #96c93d)");

    } catch (error) {
        console.error("Error al enviar los datos al servidor:", error);
        
        mostrarToastify("Error al enviar datos. Intenta nuevamente.", "linear-gradient(to right, #ff5f6d, #ffc371)");

    }
}

function mostrarToastify(message, background) {
    Toastify({
        text: message,
        gravity: "bottom",
        duration: 5000,
        close: true,
        style: {
            background: background
        }
    }).showToast();
}

/*window.onload = () => {
    mostrarToastify("Esto es un mensaje de prueba", "linear-gradient(to right, #00b09b, #96c93d)");
};*/

document.getElementById("botonEnvio").addEventListener("click", (e) => {
    e.preventDefault();
    guardarDatosPersona();
});


  
  