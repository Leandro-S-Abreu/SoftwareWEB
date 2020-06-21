function calcularVolumeArea(){

    //buscar valores no HTML
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var raio = document.getElementById("valor_raio").value ;
    var altura = document.getElementById("valor_altura").value;
    var resultado_volume_area = document.getElementById("volume_area_resultado");
    var box_resultado_calculo_cilindro = document.getElementById("box_resultado_calculo_cilindro");
    var tipo_resposta = document.getElementById("volume_area_texto");
    var unidade_medida = document.getElementById("cm3");

    //definindo PI
    var pi = 3.14159265359;
    
    //definindo o calculo a ser executado

    if (calculo_escolhido_valor == "volume"){
    
        //realizando o calculo
        var resultadoVolume = Math.round(pi * (raio*raio) * altura );

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Volume(V):"
        unidade_medida.innerHTML = "cm³"
        resultado_volume_area.innerHTML = resultadoVolume;

        //mostrar resultado volume
        box_resultado_calculo_cilindro.className = "show";

    }else if(calculo_escolhido_valor == "area"){

        //realizando o calculo
        var areaLateral = pi * 2 * raio * altura ;
        var areaBase = 2 * pi * raio * raio;
        var resultadoArea = Math.round(areaBase + areaLateral);

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Área Total(A):"
        unidade_medida.innerHTML = "cm²"
        resultado_volume_area.innerHTML = resultadoArea
        

        //mostrar resultado volume
        box_resultado_calculo_cilindro.className = "show";


    }

}

