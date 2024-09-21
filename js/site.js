log = {}

function cargarValoresAnteriores(idFront,keyLocalSorage){
    valor = document.querySelector(`#${idFront}`);
    valor.value = localStorage.getItem(`${keyLocalSorage}`);
    console.log("Se recupero setup del storage")
}

function guardarValoresConfigApi(idFront,keyLocalSorage){
    localStorage.setItem(`${keyLocalSorage}`,document.querySelector(`#${idFront}`).value)
}

function capturaValoresJson(valor){
    valor = document.querySelector(`#${valor}`)
    return valor.value
}

function guardarEnvio(datos,respuesta){
    /* aca falta modificar el log, hacerlo de JSON a Objeto y sumarle un objeto mas */
    localStorage.setItem(datos, respuesta)
}


/* Recuperar Log */
function recuperarLog(){
    logUsuario = localStorage.getItem("log")
}


/* Guardar configuracion de API */
document.querySelector("#guardarApiConfig").addEventListener('click', ()=>{
    guardarValoresConfigApi("metodo","metodo")
    guardarValoresConfigApi("url","url")
    guardarValoresConfigApi("headers","headers")
    console.log("Se guardo configuracion de Api en Local Storage")
})

/* Enviar Estado */
document.querySelector("#enviar").addEventListener('click', async(event)=>{
    event.preventDefault()
    fechayhora = obtenerFechaHoraActual();
    armarData(
        parseInt(capturaValoresJson("ddi")),
        capturaValoresJson("selectorEstado"),
        fechayhora,
        capturaValoresJson("remito"),
        parseInt(capturaValoresJson("viaje")),
        parseInt(capturaValoresJson("resultadoPrepa")),
        capturaValoresJson("codProducto"),
        capturaValoresJson("descripcionProducto"),
        parseFloat(capturaValoresJson("volumen")),
        parseFloat(capturaValoresJson("Peso")),
        capturaValoresJson("linea"),
        capturaValoresJson("muelle"),
        parseInt(capturaValoresJson("validaTransicion")),
    )
    console.log("Se recolecto la data del Front y se genero el data");
    envioEstado(
        capturaValoresJson("url"),
        capturaValoresJson("metodo"),
        JSON.parse(capturaValoresJson("headers")),
        datos
    );
})

/* Cargar valores guardados con anterioridad */
cargarValoresAnteriores("url","url")
cargarValoresAnteriores("headers","headers")

function obtenerFechaHoraActual() {
    const fecha = new Date();
    // Obtener los componentes individuales de la fecha y hora
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses van de 0 a 11
    const dia = fecha.getDate().toString().padStart(2, '0');
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2,  '0');  

    // Concatenar los componentes en el formato deseado
    const fechaHoraFormateada = `${año}${mes}${dia}${horas}${minutos}${segundos}`;
    return fechaHoraFormateada;
}

document.querySelector("#limpiar").addEventListener('click', ()=>{
    form = document.querySelector("#formDatos");
    form.reset();
    location.reload()
    console.log("Se limpio el formulario")
})