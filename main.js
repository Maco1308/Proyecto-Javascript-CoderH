
const lista = document.querySelector('#listado');

fetch('/data.json')
    .then((response) => response.json())
    .then((data) => {

        data.forEach((herramienta) => {
            const li = document.createElement('li')
            li.innerHTML = `<h4>${herramienta.nombre}</h4>
            <p>${herramienta.categoria}</p>
            <p>${herramienta.precio}</p> 
            <hr/>`
            lista.append(li)
        })      
})

class Herramienta {
    constructor (nombre,categoria,costo){
        this.nombre = nombre;
        this.categoria = categoria;
        this.costo = parseFloat(costo);
        
    }
}

const datosCia = {
    empresa : "Servicios Especiales SA",
    direccion : "calle falsa 123",
    telefono : "123456789",
    correo : "xxxxx@xxxx",
    pagina : "www.xxxx.com"

}
let empresa = datosCia.empresa;
let direccion = datosCia.direccion;
let telefono = datosCia.telefono;

let nombrePersona = 
    prompt('Ingrese su nombre');{
    
    Swal.fire({
        title: 'Hola ' + nombrePersona,
        text: 'Bienvenido a la pagina de ' + empresa,

    })
}    

let arrayHerramientas = [];
let minuevaHerramienta = document.querySelector("#nuevaHerramienta");
let inputNombre = document.querySelector("#iNombre");

let nombreIngresado = nuevaHerramienta.children[1].value;
let categoriaIngresado = nuevaHerramienta.children[3].value;
let costoIngresado = nuevaHerramienta.children[5].value;

let displayCia = document.querySelector("#displayCia");
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

    const verificacion=(nombreIngresado == '' || categoriaIngresado =='' || costoIngresado == '') ? bandera=false : bandera=true;
    verificacion ? Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Herramienta ingresada correctamente',
        showConfirmButton: false,
        timer: 10000
      }) : Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Faltan campos por completar',
        showConfirmButton: false,
        timer: 10000
      });

}


function agregarHerramienta(e){
    e.preventDefault();
    validarIngreso();
    if (bandera == true) {
        let opcion = confirm('¿Desea agregar esta herramienta?');

        
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
        <button class="btn btn-secondary btn-lg" id="${herramienta.nombre}Eliminar">Eliminar herramienta</button>
        </div>
        <hr>
        `
        let botonEliminar = document.querySelector(`#${herramienta.nombre}Eliminar`);
        botonEliminar.addEventListener('click', eliminarHerramienta);
        
        
    }
    console.log(...arrayHerramientas);
    localStorage.setItem('arrayHerramientas', JSON.stringify(arrayHerramientas));
}

let eliminarHerramienta = (e) => {
    let opcion = confirm('¿Desea eliminar esta herramienta?');
    if (opcion == true){
        let herramientaEliminar = e.target.id;
        let herramientaEliminarIndex = arrayHerramientas.findIndex(herramienta => herramienta.nombre == herramientaEliminar);
        arrayHerramientas.splice(herramientaEliminarIndex, 1);
        localStorage.setItem('arrayHerramientas', JSON.stringify(arrayHerramientas));
        MostrarTodasHerramientas();
    }
    else{
        alert ('No se eliminara la herramienta');

    }
}


displayCia.innerHTML = `<h3> Nombre de la empresa:</h3>`;	
displayCia.innerHTML += `<p><strong>Empresa: </strong> ${empresa}</p>
<p><strong>Direccion: </strong> ${direccion}</p>
<p><strong>Telefono: </strong> ${telefono}</p>`;



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

document.querySelector("#nomBienvenida").textContent = "Bienvenido " + nombrePersona;

// Storage //

localStorage.setItem('Nombre_persona', nombrePersona);


