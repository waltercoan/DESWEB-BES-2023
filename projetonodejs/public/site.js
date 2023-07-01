//Criar uma função JavaScript autoexecutavel
(function(){
    //procura na tela se tem um id="clientes"
    //coloque evento click no elemento com
    //a class js-delete
    $('#clientes').on('click','.js-delete',function(){
        //callback
        let botaoclicado = $(this) //jquery recupere botaoclicado
        //copia o id do cliente escondido no botao excluir para o botao sim
        $('#btnsim').attr('data-id', botaoclicado.attr('data-id'))
        //abre a tela de confirmação da exclusão
        $('#meumodal').modal('show')
    })
    //procura na tela o botao SIM
    //coloca um evento de click no botao sim
    $('#btnsim').on('click',function(){
        //receber a referencia do botao sim
        let botaosim = $(this)
        //recuperar de dentro do botao sim o codigo do cliente
        let idcliente = botaosim.attr('data-id')
        // chamar o backend da aplicação para remover o cliente
        $.ajax({
            url: '/clientes/delete/' + idcliente, //no endereco de deletar
            method: 'GET', //metodo do protocolo http GET
            success: function() {
                window.location.href='/clientes' //em caso de sucesso volte para o inicio
            }
        })
    })
})()