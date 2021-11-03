var resumido = document.querySelector('#resumido');
var completo = document.querySelector('#completo');

var identificadores = [
    'email',
    'site',
    'endereco',
    'hformacao',
    'formacao',
    'hcomplementar',
    'complementar',
    'hidiomas',
    'idiomas',
    'formulario',
]

function aparecer() {
    for (var i = 0; i < identificadores.length; i++) {
        document.getElementById(identificadores[i]).style.visibility = 'visible';
    }
}

function esconder() {
    for (var i = 0; i < identificadores.length; i++) {
        document.getElementById(identificadores[i]).style.visibility = 'hidden';
    }
}

function mostrar(c='', r='') {
    if (c == 'ok') {
        completo.style.color = '#000000';
        resumido.style.color = '#ff0000';
        aparecer();
    } else if (r == 'ok'){
        completo.style.color = '#ff0000';
        resumido.style.color = '#000000';
        esconder();
    }
}

