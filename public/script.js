const API_URL_VERIFICAR = 'https://script.google.com/macros/s/AKfycbxd2Trr3JhZDytDGRctGZLVbl32QtT-HYWoL-Uu6eEnkRwiAME_vn5XHZrfLQdG2nEy0w/exec';

function verificarCodigo() {
    const codigo = document.getElementById('codigo').value;
    const url = `${API_URL_VERIFICAR}?callback=callbackFunc&id=${codigo}&accion=verificar`;
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

function actualizarCodigo(codigo) {
    const url = `${API_URL_VERIFICAR}?callback=callbackFunc&id=${codigo}&accion=actualizar`;
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

function callbackFunc(data) {
    if (data.verificar) {
        document.getElementById('resultado').innerText = "Código válido. Procediendo a actualizar...";
        actualizarCodigo(data.id);
    } else if (data.actualizado) {
        document.getElementById('resultado').innerText = "Código actualizado exitosamente.";
    } else {
        document.getElementById('resultado').innerText = "Código no válido o ya usado.";
    }
}
