function somenteNumerosAltura(evento){
    campoAltura = document.getElementById("altura");
    var codigo = evento.keyCode;

    if( codigo < 48 || codigo > 57){
        return false;
    }       
    
    mascaraAltura(campoAltura)
}

function somenteNumerosPeso(evento){
    campoPeso = document.getElementById("peso");
    var codigo = evento.keyCode;

    if( codigo < 48 || codigo > 57){
        return false;
    }

    mascaraPeso(campoPeso)
}

function mascaraAltura(elemento){
    var conteudo = elemento.value;
    if( conteudo.length == 1){
        var texto = conteudo.charAt(0) + "." + conteudo.substring(1);
        elemento.value = texto;
    }
}

function mascaraPeso(elemento){
    var conteudo = elemento.value;
    if( conteudo.length == 2){
        var texto = conteudo.charAt(0) +  conteudo.charAt(1) +"." + conteudo.substring(2);
        elemento.value = texto;
    }
}

function calcularIMC() {
    var resultIMC = "";
    var texto = "";
    var linkIMG ="";
    var textoFim ="";
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var IMC = (peso / (altura * altura)).toFixed(1);

    if (IMC <= 18.5){
        texto = "Abaixo de 18,50"
        resultIMC = "Abaixo do peso"
        linkIMG = "./img/baixo_peso.png"
        textoFim = "Você está abaixo do peso ideal. Isso pode ser apenas uma caracteristica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico."
    }
    else if (IMC > 18.5 && IMC <= 24.9){
        texto = "Entre 18,50 e 24,90"
        resultIMC = "Peso normal"
        linkIMG = "./img/peso_normal.png"
        textoFim = "Parabéns, você está com o peso normal para a sua altura. Para continuar assim, é importante manter uma alimentação balanceada e prática de atividades físicas, além de estar em dia com os exames de rotina."
    }
    else if (IMC > 24.9 && IMC <= 29.9){
        texto = "Entre 24,90 e 29,90"
        resultIMC = "Acima do peso"
        linkIMG = "./img/acima_peso.png"
        textoFim = "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico."
    }
    else if (IMC > 29.9 && IMC <= 34.9){
        texto = "Entre 29,90 e 34,90"
        resultIMC = "Obsidade grau I"
        linkIMG = "./img/obesidade_1.png"
        textoFim = "Sinal de alerta! O excesso de peso é um fator de risco para o desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já trás beneficios a saúde. Procure um médico para definir o tratamento mais adequado para você."
    }
    else if (IMC > 34.9 && IMC <= 39.9){
        texto = "Entre 34,90 e 39,90"
        resultIMC = "Obesidade grau II"
        linkIMG = "./img/obesidade_2.png"
        textoFim = "Sinal vermelho! Nessa faixa de IMC, o risco de doenças associadas está entre alto e muito alto. Procure um médico."
    }
    else if (IMC > 39.9){
        texto = "Acima de 39,90"
        resultIMC = "Obsesidade grau III (morbida)"
        linkIMG = "./img/obesidade_3.png"
        textoFim = "Sinal vermelho! Nessa faixa de IMC, o risco de doenças associadas está entre alto e muito alto. Procure um médico."
    }

    document.getElementById("textoResultado").innerHTML = `<div class="row">
            <div class="col-12 col-md-8 pt-2">
                <p class="text-center">Seu IMC é: <strong> ${IMC} </strong> </p>
                <p class="text-center"> IMC ${texto} <br> <strong> ${resultIMC} </strong></p>
                <p class="text-center">${textoFim}</p>
            </div>
            <div class="col-12 col-md-4 pt-3 pb-1 justify-content-center align-self-center">
                <img src="${linkIMG}" style="max-width:300px;" class="rounded mx-auto d-block">
            </div>
        </div>`
    alert("Resultado: " + resultIMC)
}