
class Herramienta {
    constructor (nombre,categoria,costo){
        this.nombre = nombre;
        this.categoria = categoria;
        this.costo = parseFloat(costo);
        
    }
}

let nombrePersona = prompt('Ingrese su nombre');    
document.querySelector("#nomBienvenida").textContent = "Bienvenido " + nombrePersona;
let arrayHerramientas = [];
let minuevaHerramienta = document.querySelector("#nuevaHerramienta");
let inputNombre = document.querySelector("#iNombre");

let nombreIngresado = nuevaHerramienta.children[1].value;
let categoriaIngresado = nuevaHerramienta.children[3].value;
let costoIngresado = nuevaHerramienta.children[5].value;

let contenedor = document.querySelector("#herramientaIngresada");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

minuevaHerramienta.addEventListener("submit", agregarHerramienta);
btnMostrar.addEventListener('click', MostrarTodasHerramientas);

inputNombre.focus();

function validarIngreso() {
    nombreIngresado = nuevaHerramienta.children[1].value;
    categoriaIngresado = nuevaHerramienta.children[3].value;
    costoIngresado = nuevaHerramienta.children[5].value;
    console.log(nombreIngresado);
    console.log(categoriaIngresado);
    console.log(costoIngresado);

    if (nombreIngresado == '' || categoriaIngresado =='' || costoIngresado == ''){
        alert('Debe completar todos los campos');
        inputNombre.focus();
        bandera = false;

    }
    else {
        bandera = true
    }
}



function agregarHerramienta(e){
    e.preventDefault();
    validarIngreso();
    if (bandera == true) {
        let opcion = confirm("¿Comfirma que desea añadir la herramienta?");
        if (opcion == true){
            let formulario = e.target
            arrayHerramientas.push(new Herramienta(nombreIngresado, categoriaIngresado, costoIngresado));
        
        }
        else{
            alert ('No se añadira la herramienta');
        }

        nuevaHerramienta.children[1].value = '';
        nuevaHerramienta.children[3].value = '';
        nuevaHerramienta.children[5].value = '';

        contenedor.innerHTML = '';
        añadirDom();
        inputNombre.focus();        
    }
    else {
        inputNombre.focus();
    }
}

function añadirDom(){
    contenedor.innerHTML = `<h4> Ultima herramienta ingresada: </h4>
    <p><strong> Nombre de herramienta: </strong> ${nombreIngresado}</p>
    <p><strong> Categoria de herramienta: </strong> ${categoriaIngresado}</p>
    <p><strong> Costo de herramienta: </strong> ${costoIngresado}</p>
    <hr>`;
}

function MostrarTodasHerramientas(e) {
    e.preventDefault();
    let i=0;
    displayTodos.innerHTML = '<h4> Listado de todas las herramientas: </h4>';
    for (const herramienta of arrayHerramientas) {
        displayTodos.innerHTML += `
        <div id="${herramienta.nombre}" class="algunaClaseCSS">
        <p><strong> Nombre: </strong> ${herramienta.nombre}</p>
        <p><strong> Categoria: </strong> ${herramienta.categoria}</p>
        <p><strong> Costo: </strong> ${herramienta.costo}</p>
        <button id="${herramienta.nombre}Eliminar">Eliminar herramienta</button>
        </div>
        <hr>
        `
    }

}

// Eventos //

const nombre = document.querySelector("#iNombre");
const cate = document.querySelector("#iCategoria");
const costo = document.querySelector("#iCosto");
nombre.addEventListener("input", () => {
    console.log("Datos ingresados en nombre de Herramienta");
})

cate.addEventListener("input", () => {
    console.log("Datos ingresados en categoria");
})

costo.addEventListener("input", () => {
    console.log("Datos ingresados en costo");
})

