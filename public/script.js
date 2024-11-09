const API_URL_VERIFICAR = 'https://script.google.com/macros/s/AKfycbywpWK3C7XCthMha5y4M7tRQ_idaDMkRIR4q8RrOEf_CqPdqhx2CmJpy7GGc4BmQKrpXA/exec';

function verificarCodigo() {
    const codigo = document.getElementById('codigo').value;
    console.log("Código a verificar:", codigo); // Registro de depuración
    const url = `${API_URL_VERIFICAR}?callback=callbackFunc&id=${codigo}&accion=verificar`;
    console.log("URL de verificación:", url); // Registro de depuración
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        console.log("Script cargado correctamente.");
    };
    script.onerror = () => {
        console.error("Error al cargar el script.");
    };
    document.body.appendChild(script);
}

function actualizarCodigo(codigo) {
    console.log("Código a actualizar:", codigo); // Registro de depuración
    const url = `${API_URL_VERIFICAR}?callback=callbackFunc&id=${codigo}&accion=actualizar`;
    console.log("URL de actualización:", url); // Registro de depuración
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        console.log("Script cargado correctamente.");
    };
    script.onerror = () => {
        console.error("Error al cargar el script.");
    };
    document.body.appendChild(script);
}

function callbackFunc(data) {
    console.log("Datos recibidos:", data); // Registro de depuración
    if (data.verificar) {
        document.getElementById('resultado').innerText = "Código válido. Procediendo a actualizar...";
        actualizarCodigo(data.id);
    } else if (data.actualizado) {
        document.getElementById('resultado').innerText = "Código actualizado exitosamente.";
    } else {
        document.getElementById('resultado').innerText = "Código no válido o ya usado.";
    }
}
