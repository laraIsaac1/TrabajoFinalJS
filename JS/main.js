let personal = [];

    function guardarDatosPersona() 
    {
      
      const nombre = document.getElementById("FormControlInputName").value;
      const apellido = document.getElementById("FormControlInputApellido").value;
      const email = document.getElementById("FormControlInputEmail").value;
      const cv = document.getElementById("formFileCV").files[0];
      const mensaje = document.getElementById("FormControlTextarea").value;

      const persona = 
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
        cv: cv ? cv.name : "No se adjuntó CV", 
        mensaje: mensaje
      };

      personal.push(persona);

      console.log(personal);
    }

    let opiniones = JSON.parse(localStorage.getItem('opiniones')) || []; //para que se guarden los comentarios por mas que se refresque la página

    function guardarDatosOpiniones()
    {

        const email = document.getElementById("inputEmail").value;
        const nombre = document.getElementById("inputName").value;
        const empresa = document.getElementById("inputCompany").value;
    
        const opcionSistema = document.querySelector('input[name="gridRadiosSist"]:checked').value;
    
        const opcionPostVenta = document.querySelector('input[name="gridRadiosVenta"]:checked').value;
    
        const comentario = document.getElementById("floatingTextarea").value;
    
        const nuevaOpinion = {
            email: email,
            nombre: nombre,
            empresa: empresa,
            sistema: opcionSistema,
            postVenta: opcionPostVenta,
            comentario: comentario
        };
    
        opiniones.push(nuevaOpinion);
    
        localStorage.setItem('opiniones', JSON.stringify(opiniones));  // Guardar el array de opiniones en local 

        mostrarOpiniones();

        document.querySelector('form').reset();

        //console.log(opiniones);
    }

    function mostrarOpiniones()
    {
        const contenedorOpiniones = document.getElementById("opinionesCli");
        contenedorOpiniones.innerHTML = "";

        opiniones.forEach(opinion =>{
        const opinionHTML = `
            <div class="opinion">
                <p>Opinión de <strong>${opinion.nombre}</strong> de la empresa <strong>${opinion.empresa}</strong>.</p>
                <p><strong>${opinion.nombre}</strong> considera que nuestro servicio es <strong>${opinion.sistema}</strong> y nuestra atención post-venta es <strong>${opinion.postVenta}</strong>.</p>
                <p>Comentario: <em>${opinion.comentario}</em></p>
            </div>
            <hr>
        `;

        contenedorOpiniones.innerHTML += opinionHTML;
        });
    }
    document.addEventListener('DOMContentLoaded', mostrarOpiniones);