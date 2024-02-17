document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-contact').addEventListener('submit', function (e){
        e.preventDefault();
        alert('Formulário enviado com sucesso!')
    })
})