const form                                        = document.getElementById('form-pratique');
const primeiroValor                               = document.getElementById('primeiro-valor');
const segundoValor                                = document.getElementById('segundo-valor');

let ValorEValido                                  = false;

function validaValor(primeiroValor, segundoValor){
    if (segundoValor > primeiroValor){
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = 'Parabéns, funcionou!'
    const mensagemFalha = `O segundo valor deve ser maior que o primeiro. <br> O valor: <b>${primeiroValor.value}</b> é maior ou igual a: <b>${segundoValor.value}</b>`


    function validaValor(primeiroValor, segundoValor) {
        if (segundoValor > primeiroValor) {
            return true;
        }
    }

    ValorEValido                                  = validaValor(primeiroValor.value, segundoValor.value);

    if (ValorEValido) {
        const containerMensagemSucesso            = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML        = mensagemSucesso
        containerMensagemSucesso.style.display    = "block"

        primeiroValor.value   = '';
        segundoValor.value    = '';
        document.querySelector('.error-message').style.display = 'none';
        primeiroValor.classList.remove('error')
        segundoValor.classList.remove('error')


    } else {
        const containerMensagemFalha = document.querySelector('.error-message');
        containerMensagemFalha.innerHTML = mensagemFalha
        containerMensagemFalha.style.display = "block"

        document.querySelector('.success-message').style.display = 'none';


        primeiroValor.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';

        segundoValor.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';


    }
});

