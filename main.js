const form = document.getElementById('form-confirm');

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagem = document.getElementById('mensagem');
    const acerto = document.getElementById('validaçãorealizada');
    const erro = document.getElementById('erro');

function validarCampos(campoA, campoB) {
    return campoA <= campoB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    acerto.style.display = 'none';
    erro.style.display = 'none';

    let validarForm = validarCampos(Number(campoA.value), Number(campoB.value));
    if (validarForm){
        acerto.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        erro.style.display = 'block';
    }
})

