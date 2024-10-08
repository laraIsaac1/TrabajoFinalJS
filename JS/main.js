let personal = [];

    function guardarDatos() {
      // Obtener el valor de cada campo del formulario
      const nombre = document.getElementById("FormControlInputName").value;
      const apellido = document.getElementById("FormControlInputApellido").value;
      const email = document.getElementById("FormControlInputEmail").value;
      const cv = document.getElementById("formFileCV").files[0]; // Solo el archivo seleccionado
      const mensaje = document.getElementById("FormControlTextarea").value;

      // Crear un objeto con los datos de la persona
      const persona = 
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
        cv: cv ? cv.name : "No se adjuntó CV", // Solo el nombre del archivo si se seleccionó uno
        mensaje: mensaje
      };

      // Guardar el objeto en el array de personal
      personal.push(persona);

      // (Opcional) Mostrar el array actualizado en la consola
      console.log(personal);
    }
