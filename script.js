let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function guardarClientes() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

function mostrarClientes() {
  lista.innerHTML = "";
  clientes.forEach((cliente, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${cliente.nombre} - ${cliente.servicio}
      <button onclick="eliminarCliente(${index})">❌</button>
    `;
    lista.appendChild(li);
  });
}

function eliminarCliente(index) {
  clientes.splice(index, 1);
  guardarClientes();
  mostrarClientes();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;

  clientes.push({ nombre, servicio });

  guardarClientes();
  mostrarClientes();
  form.reset();
});

mostrarClientes();
