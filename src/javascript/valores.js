// saldo da minha conta
saldo = 1500;

// depositar para minha conta
var botao_depositar = document.getElementById('depositar');
botao_depositar.addEventListener('click', depositar)

var dinheiroA = document.getElementById('dinheiro');

function depositar(botao_depositar){
    botao_depositar.preventDefault();
    var deposito = document.getElementById('valor_deposito').value;

    if(isNaN(deposito) || deposito === ""){
        alert("Informe um número")
        document.getElementById('valor_deposito').value = "";
    }else{
        saldo = parseFloat(deposito) + saldo
        alert("Depósito feito com sucesso");
    
        dinheiroA.innerHTML=saldo;
        document.getElementById('valor_deposito').value = "";
    }

}




// depositar para outras contas
var botao_depositar2 = document.getElementById('botao_depositar');
botao_depositar2.addEventListener('click', depositarOutraConta)

function depositarOutraConta(botao_depositar2){
    botao_depositar2.preventDefault();

    var depositarOutra = document.getElementById('valor_depositar').value;

    var bancos = document.querySelector('#bancos');
    var value1 = bancos.options[bancos.selectedIndex].value;


    var contas = document.querySelector('#contas');
    var value2 = contas.options[contas.selectedIndex].value;




    var agencia_depositar = document.getElementById("agencia_depositar").value;
    var conta_depositar = document.getElementById("conta_depositar").value;
    var titular_depositar = document.getElementById("titular_depositar").value;
    var cpf_depositar = document.getElementById("cpf_depositar").value;


    if(value1 === "bancos" || value2 === "conta"){
        alert("Informe qual o banco e informe o tipo da conta")
    }else if(agencia_depositar.length === 0 || agencia_depositar < 5){
        alert("Digite o número da agência ou uma agência valida")
    }else if(conta_depositar.length === 0 || conta_depositar < 6){
        alert("Digite o número da conta ou uma conta valida")
    }else if(titular_depositar.length === 0){
        alert("Digite seu nome para realizarmos o depósito")
    }else if(cpf_depositar < 12){
        alert("Digite um CPF válido por favor")
    }else{
        saldo = saldo - depositarOutra;
        alert("Depósito feito com sucesso");
        dinheiroA.innerHTML = saldo
        document.getElementById('agencia_depositar').value = "";
        document.getElementById('conta_depositar').value = "";
        document.getElementById('titular_depositar').value = "";
        document.getElementById('cpf_depositar').value = "";
    }
}





// Transferência
var botao_transferencia = document.getElementById('botao_transferencia');
botao_transferencia.addEventListener('click', Transferencia)

function Transferencia(botao_transferencia){
    botao_transferencia.preventDefault();

    var transferencia = document.getElementById('valor_transferencia').value;

    var bancos_tranferencia = document.querySelector('#banco_transferencia');
    var value_transferencia = bancos_tranferencia.options[bancos_tranferencia.selectedIndex].value;


    var contas_transferencia = document.querySelector('#contas_transferencia');
    var value_transferencia = contas_transferencia.options[contas_transferencia.selectedIndex].value;




    var agencia_transferencia = document.getElementById("agencia_transferencia").value;
    var conta_transferencia = document.getElementById("conta_transferencia").value;
    var titular_transferencia = document.getElementById("titular_transferencia").value;
    var cpf_transferencia = document.getElementById("cpf_transferencia").value;


    if(value_transferencia === "bancos_transferencia" || value_transferencia === "conta_transferencia"){
        alert("Informe qual o banco e informe o tipo da conta")
    }else if(agencia_transferencia.length === 0 || agencia_transferencia < 5){
        alert("Digite o número da agência ou uma agência valida")
    }else if(contas_transferencia.length === 0 || contas_transferencia < 6){
        alert("Digite o número da conta ou uma conta valida")
    }else if(titular_transferencia.length === 0){
        alert("Digite seu nome para realizarmos o depósito")
    }else if(cpf_transferencia.length === 0 || cpf_transferencia < 12){
        alert("Digite um CPF válido por favor")
    }else if(transferencia > saldo){
        alert("Saldo indisponível. Consulte seu saldo");
    }else{
        saldo = saldo - transferencia;
        alert("Transferência realizada com sucesso");
        dinheiroA.innerHTML = saldo
        document.getElementById('agencia_transferencia').value = "";
        document.getElementById('conta_transferencia').value = "";
        document.getElementById('titular_transferencia').value = "";
        document.getElementById('cpf_transferencia').value = "";
    }
}






// recarga de celular
var enviar_recarga = document.getElementById('enviar_recarga');
enviar_recarga.addEventListener('click', RecargaCelular)

function RecargaCelular(enviar_recarga){
    enviar_recarga.preventDefault();

    var valor_recarga = document.getElementById('valor_recarga').value

    var recarga_celular = document.querySelector('#recarga_celular');
    var value_recarga = recarga_celular.options[recarga_celular.selectedIndex].value;


    var valor_recarga = document.getElementById("valor_recarga").value;
    var numero_recarga = document.getElementById("numero_recarga").value;


    if(value_recarga === "recarga_celular"){
        alert("Informe qual é a operadora");
    }else if(numero_recarga.length === 0 || numero_recarga < 10){
        alert("Digite o número de telefone com apenas 9 digitos")
    }else if(valor_recarga.length === 0){
        alert("Digite um número maior que 0");
    }else if(valor_recarga > saldo){
        alert("Saldo indisponível. Consulte seu saldo");
    }else{
        saldo = saldo - valor_recarga;
        alert("Recarga realizada com sucesso");
        dinheiroA.innerHTML = saldo
        document.getElementById('valor_recarga').value = "";
        document.getElementById('numero_recarga').value = "";
    }
}


