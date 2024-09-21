
let datos = { }
async function envioEstado(url, method, headers, datos){
    await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta de la API', data);
            alert("Respuesta de la API: 200 " + JSON.stringify(data))
            guardarEnvio(JSON.stringify(datos),JSON.stringify(data))
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error:', error);
        })
}


function armarData(ddi, estado, fechaEstado, numeroRemito,numeroViaje,cantidadResultadoPreparacion, codigoProducto,descripcionProducto, volumenM3, pesoKg, linea, muelleCarga, validaTransicion){
    datos.deliveryDetailId = ddi;
    datos.estado = estado;
    datos.fechaEstado = fechaEstado;
    datos.numeroRemito = numeroRemito;
    datos.numeroViaje = numeroViaje;
    datos.cantidadResultadoPreparacion = cantidadResultadoPreparacion;
    datos.codigoProducto = codigoProducto;
    datos.descripcionProducto = descripcionProducto;
    datos.volumenM3 = volumenM3;
    datos.pesoKg = pesoKg;
    datos.linea = linea;
    datos.muelleCarga = muelleCarga;
    datos.validaTransicion = validaTransicion;
/*     console.log(datos); */
}