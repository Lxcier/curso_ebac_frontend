
$(document).ready(function(){

    $('#telefone').mask('(00) 0 0000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').validate({

        messages: {
            nome: {
                required: 'Campo Obrigatório'
            },
            email: {
                required: 'Campo Obrigatório',
                email: 'Formato de email inválido'
            },
            telefone: {
                required: 'Campo Obrigatório'
            },
            cpf: {
                required: 'Campo Obrigatório',
                cpf: 'Formato de CPF inválido'
            },
            cep: {
                required: 'Campo Obrigatório',
                cep: 'Formato de CEP inválido'
            },
            endereco: {
                required: 'Campo Obrigatório'
            },
            complemento: {
                required: 'Campo Obrigatório'
            }
        }
        
    });

    $('form').submit(function(e){
        e.preventDefault();

        if($('form').valid()){
            $('.sucesso').fadeIn(1000);
            $('.erro').fadeOut(300);

            $('form input').val('')
        } else{
            $('#mensagem-error').fadeIn(1000);
            $('.sucesso').fadeOut(300);
        }
    })
});