
const contenedorClientes = document.getElementById("contenedor-clientes");
let cliente = JSON.parse(localStorage.getItem("cliente")) || [];

const cargarClientes = async () => {
  try 
  {
    const response = await fetch('../JS/clientes.json'); 
    const data = await response.json();
   
    renderizarClientes(data);
  } catch (error) 
  {
    console.error("Error al cargar clientes:", error);
  }
  };


const renderizarClientes = (array) => {

  array.forEach((elm) => {
      const divCol = document.createElement("div");
      divCol.classList.add("col");

      divCol.innerHTML = `
      <div class="card h-100">
        <img src="${elm.logo}" class="card-img-top img-fluid " alt="Logo de ${elm.nombre}">
        <div class="card-body">
          <h3 class="card-title">${elm.nombre}</h3>
          <h5 class="card-text">${elm.rubro}</h5>
          <h5 class="card-text">&#x1F4CD; ${elm.ubicacion}</h5>
        </div>
      </div>
      `;
      contenedorClientes.append(divCol)

    });
};

const guardarClienteLs = () => {
  localStorage.setItem("cliente", JSON.stringify(cliente))
}


cargarClientes();
