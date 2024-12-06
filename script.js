/*Códigos do Exercício 5*

function a(){
    rs.style.color = "white";
    document.body.style.backgroundImage = "url('img/vt.jpg')";
    rs.textContent = "PARABÉNS VOCE VENCEU";
    console.log("ele venceu");
}

function b(){
    rs.style.color = "white";
    document.body.style.backgroundImage = "url('img/dt.jpg')";
    rs.textContent = ("VOCE PERDEU");
    console.log("Ele perdeu");
}

function c(){
    document.body.style.backgroundImage = "url('img/bla.jpg')";
    alert("escolha a ou b e torça para ganhar");
    let name = prompt("aproveita e digite seu nome:");
    alert("QUE NOME ESTRANHO! " + name + "... Nunca ví na minha vida!");
    console.log(name + " realmente tem um nome estranho...");
}

/*Fim do Código 5*/

/*Códigos do Exercício 6*

function cnh(){
    let nomeUsuario
    while (true){
        nomeUsuario = prompt("Digite seu nome:");
        if (nomeUsuario === "" || /^[A-Za-z]+$/.test(nomeUsuario)){
            break;
        } else {
            alert("Digite um nome válido.")
        }
    }
    console.log("O nome do usuário é " + nomeUsuario);

    let idadeUsuario; //parseInt(prompt("Digite sua idade:"));

    while (true){
        idadeUsuario = prompt("Digite sua idade:")
        if (idadeUsuario === "" || isNaN(idadeUsuario) || idadeUsuario <=0) {
        alert("Por favor, insira uma idade válida.");
    } else {
        idadeUsuario = parseInt(idadeUsuario);
        break;
    }

    }

    if (idadeUsuario >= 18){
        console.log(nomeUsuario + " possui" + idadeUsuario + " anos, ele está apto.")
        alert(nomeUsuario + " , você está apto à tirar a CNH!");
    } else {
        console.log(nomeUsuario + " possui" + idadeUsuario + " anos, ele não está apto.");
        alert(nomeUsuario + " , você não está apto à tirar a CNH.");
    }
} 
function seis(){
    cnh();
}

/*Fim do Código 6*/

/*Códigos do Exercício 7*

function jogo7(){

    let audio = document.getElementById('audio');
    audio.play();

    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    let tentativas = 0;

    do{
    palpite = parseInt(prompt("Digite seu palpite entre 1 e 10."));

        if(isNaN(palpite) || palpite < 1 || palpite > 10){

            alert("Digite um número válido (Entre 1 e 10). ");
            continue;
        }

        tentativas++;

        if(palpite < random){
            alert("O número secreto é maior do que " + palpite + " .");
        } else if (palpite > random){
            alert("O número secreto é menor do que " + palpite + " .");
        } else {
            alert("Parabéns! Vôce acertou com " + tentativas + " tentativas!");
            break;
        }
    }
    while (palpite !== random);
}

/*Fim do Código 7*/

/*Códigos do Exercício 8*

    let numero = Math.floor(Math.random() * 10) + 1;
    console.log(numero);

function jogo8(){
    let inputPalpite = document.getElementById('palpite');
    let palpite = Number(inputPalpite.value);

    if(palpite === numero){

        document.getElementById("resposta").textContent="PARABÉNS! Você acertou! ";
        document.getElementById("alerta").textContent="🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
        document.body.style.backgroundImage= "url('img/happy.jpg')";
    }
    else if(isNaN(palpite) || palpite === "" || palpite > 10 || palpite < 1){

        document.getElementById("alerta").textContent="Por favor, digite um NÚMERO válido (entre 1 e 10)";
        inputPalpite.value="";
    } 
    else if(palpite < numero){

        document.getElementById('alerta').textContent="O número secreto é maior que " + palpite + ".";
        inputPalpite.value="";

    }
    else if(palpite > numero){

        document.getElementById('alerta').textContent="O número secreto é menor que " + palpite + ".";
        inputPalpite.value="";
    }
}

/*Fim do Código 8*/