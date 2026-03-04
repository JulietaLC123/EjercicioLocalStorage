const input = document.getElementById("textoInput");
const lista = document.getElementById("miLista");

// Cargar elementos al iniciar
document.addEventListener("DOMContentLoaded", cargarElementos);

function agregarElemento(item) {
    const texto = input.value.trim();
    if (texto === "") return;

    let elementos = obtenerElementos();
    elementos.push(texto);
    localStorage.setItem(item, JSON.stringify(elementos));

    mostrarElemento(texto);
    input.value = "";
}

function obtenerElementos() {
    return JSON.parse(localStorage.getItem("miLista")) || [];
}

function cargarElementos() {
    let elementos = obtenerElementos();
    elementos.forEach(texto => mostrarElemento(texto));
}

function mostrarElemento(texto) {
    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.onclick = function () {
        eliminarElemento(texto);
        li.remove();
    };

    li.appendChild(btnEliminar);
    lista.appendChild(li);
}

function eliminarElemento(texto) {
    let elementos = obtenerElementos();
    elementos = elementos.filter(item => item !== texto);
    localStorage.setItem("miLista", JSON.stringify(elementos));
}

function borrarLocalStorage(item) {
    localStorage.removeItem(item); 
    lista.innerHTML = "";
}