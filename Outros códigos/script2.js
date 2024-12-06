let numero = Math.floor(Math.random() * 10) + 1;
console.log(numero)
let tentativas = 0;

function jogo8(){
    
    let inputPalpite = document.getElementById('palpite');
    let palpite = Number(inputPalpite.value);

    if(isNaN(palpite) || palpite < 1 || palpite > 10 || palpite === ""){
        document.getElementById("alerta").textContent = "Por favor, digite um NÚMERO válido (entre 1 e 10).";
        return;
    }

    tentativas++;
    console.log(tentativas);

    if(palpite === numero){

        document.getElementById("resposta").textContent = "PARABÉNS! Você acertou!";
        document.getElementById("alerta").textContent = "Parabéns";
        document.body.style.backgroundImage = "url('img/happy.jpg')";
        input.disable = true;
    }
    else if(tentativas == 2){

        document.write('<img src="img/dt.jpg" id="dt" alt="Imagem"><p id="p">Você perdeu</p>');
        let dt = document.getElementById("dt");
        let p = document.getElementById("p");
        dt.style.width= "100%";
        dt.style.height= "100%";
        p.style.fontSize= "50px";
        p.style.color= "blue";
        p.style.zIndex= "1";
        p.style.position("relative");
        p.style.backgroundPositionY= "-400px";
        
        //document.getElementById("alerta").textContent = "Você perdeu. 10 tentativas alcançadas";
    }   
    else if(numero < palpite){

        document.getElementById("alerta").textContent = "O número secreto é menor que " + palpite + ".";
    }
    else{

        document.getElementById("alerta").textContent = "O número secreto é maior que " + palpite + ".";
    }

    input.value="";
}
