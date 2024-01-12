$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();

        const novaTarefa = $('#add-tarefa').val();
        const itemNovo = $(`<li style="display: none;">${novaTarefa}</li>`);

        $(itemNovo).appendTo('ul');
        $(itemNovo).fadeIn(1000);
        $('#add-tarefa').val('');

        $("#lista-tarefas").on("click", "li", function() {
            $(this).toggleClass("cancelado");
        });

    })
})
