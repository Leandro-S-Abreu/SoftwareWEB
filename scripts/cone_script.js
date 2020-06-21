function selecionarAreaVolume(){

    //buscar o calculo escolhido no HTML
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var geratriz_display = document.getElementsByClassName("valor_geratriz");
    
    //armazenar os dados em uma array
    var tamanho_geratriz = geratriz_display.length;

    //alterar a classe da array
    if (calculo_escolhido_valor == "volume"){
        for (var i=0; i<tamanho_geratriz; i++) {
            geratriz_display[i].style.display = "none"
          }
        }
        else if(calculo_escolhido_valor == "area"){
            for (var i=0; i<tamanho_geratriz; i++) {
                geratriz_display[i].style.display = "inline-flex"
            }
        }
        
}

function calcularVolumeArea(){

    //buscar valores no HTML
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var raio = document.getElementById("valor_raio").value ;
    var altura = document.getElementById("valor_altura").value;
    var geratriz = document.getElementById("valor_geratriz").value;
    var mostrar_resultado_volume_area = document.getElementById("volume_area_resultado");
    var box_resultado_calculo_cone = document.getElementById("box_resultado_calculo_cone");
    var alterar_tipo_resposta = document.getElementById("volume_area_texto");
    var unidade_medida = document.getElementById("cm3");

    //definindo PI
    var pi = 3.14159265359;
    
    //definindo o calculo a ser executado

    if (calculo_escolhido_valor == "volume"){
    
        //realizando o calculo
        var resultadoVolume = Math.round(pi * (raio*raio) * altura /3);

        //alterando o campo do HTML para o resultado correto
        alterar_tipo_resposta.innerHTML = "Volume(V):"
        unidade_medida.innerHTML = "cm³"
        mostrar_resultado_volume_area.innerHTML = resultadoVolume;

        //mostrar resultado volume
        box_resultado_calculo_cone.className = "show";

    }else if(calculo_escolhido_valor == "area"){

        //realizando o calculo
        var areaLateral = pi * raio * geratriz;
        var areaBase = pi * raio * raio;
        var resultadoArea = Math.round(areaBase + areaLateral);

        //alterando o campo do HTML para o resultado correto
        alterar_tipo_resposta.innerHTML = "Área Total(A):"
        unidade_medida.innerHTML = "cm²"
        mostrar_resultado_volume_area.innerHTML = resultadoArea
        

        //mostrar resultado volume
        box_resultado_calculo_cone.className = "show";


    }

}

