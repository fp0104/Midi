function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log ('elemento não encontrado.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0;contador < listaDeTeclas.length; contador ++) {

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`

    teclas.onclick = function () {
        tocaSom(idAudio)
    }
    
    teclas.onkeydown = function (evento) {

    if  (evento.code === 'Space' || evento.code === 'Enter') {
        teclas.classList.add('ativa');}
    }
    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }
}