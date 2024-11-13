const clientesSlides = document.getElementById("clientes-slides");

// Cargar clientes desde un archivo JSON
const cargarClientes = async () => {
    try {
        const response = await fetch('../JS/clientes.json');
        const data = await response.json();
        renderizarClientes(data);

        // Inicializar FullPage.js después de agregar todos los clientes
        new fullpage('#fullpage', {
          autoScrolling: true,
          fitToSection: false,
          paddingTop: '100px',
          paddingBottom: '60px',
          anchors: ['firstPage', 'secondPage', 'thirdPage'],
          responsiveHeight: 700,
      });
    } catch (error) {
        console.error("Error al cargar clientes:", error);
    }
};


// Renderizar clientes en grupos de tres por slide
const renderizarClientes = (clientesArray) => {
    clientesSlides.innerHTML = "";

    for (let i = 0; i < clientesArray.length; i += 3) {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        const filaClientes = document.createElement("div");
        filaClientes.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");

        for (let j = i; j < i + 3 && j < clientesArray.length; j++) {
            const cliente = clientesArray[j];

            const divCol = document.createElement("div");
            divCol.classList.add("col");

            divCol.innerHTML = `
                <div class="card h-100">
                  <div class="h-100 d-flex align-items-center">
                    <img src="${cliente.logo}" class="card-img-top img-fluid object-fit-cover h-100" alt="Logo de ${cliente.nombre}">
                  </div>
                    <div class="card-body">
                        <h3 class="card-title">${cliente.nombre}</h3>
                        <h5 class="card-text">${cliente.rubro}</h5>
                        <h5 class="card-text">&#x1F4CD; ${cliente.ubicacion}</h5>
                    </div>
                </div>
            `;
            filaClientes.appendChild(divCol);
        }

        slide.appendChild(filaClientes);
        clientesSlides.appendChild(slide);
    }
};

// Cargar y renderizar clientes
cargarClientes();
