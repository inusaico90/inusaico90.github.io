const API_URL_VERIFICAR = 'https://script.google.com/macros/s/AKfycby-WZwVfsQsX61up1FwNSeIf-38e2YbE9dB7z2kBA4XaQ_PuYkx-43E-ngIt5YYPGnP/exec';

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

// Usar MutationObserver en lugar de DOMSubtreeModified
const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('Se agregaron o eliminaron nodos hijos');
        } else if (mutation.type === 'subtree') {
            console.log('Se modificó el subárbol');
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Opcionalmente, puedes detener la observación cuando ya no la necesites
// observer.disconnect();
