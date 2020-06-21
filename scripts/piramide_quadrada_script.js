function selecionarAreaVolume(){

    //buscar o calculo escolhido no HTML
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var apotema_display = document.getElementsByClassName("valor_apotema");
    
    //armazenar os dados em uma array
    var tamanho_apotema = apotema_display.length;

    //alterar a classe da array
    if (calculo_escolhido_valor == "volume"){
        for (var i=0; i<tamanho_apotema; i++) {
            apotema_display[i].style.display = "none"
          }
        }
        else if(calculo_escolhido_valor == "area"){
            for (var i=0; i<tamanho_apotema; i++) {
                apotema_display[i].style.display = "inline-flex"
            }
        }
        
}

function calcularVolumeArea(){

    //buscar valores no HTML
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var aresta_base = document.getElementById("valor_aresta_base").value ;
    var altura = document.getElementById("valor_altura").value;
    var apotema = document.getElementById("valor_apotema").value;
    var resultado_volume_area = document.getElementById("volume_area_resultado");
    var box_resultado_calculo_piramide_quadrada = document.getElementById("box_resultado_calculo_piramide_quadrada");
    var tipo_resposta = document.getElementById("volume_area_texto");
    var unidade_medida = document.getElementById("cm3");
  
    //definindo o calculo a ser executado

    if (calculo_escolhido_valor == "volume"){
    
        //realizando o calculo
        var areaBase = (Math.pow(aresta_base,2))
        var resultadoVolume = Math.round(areaBase * altura/3);

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Volume(V):"
        unidade_medida.innerHTML = "cm³"
        resultado_volume_area.innerHTML = resultadoVolume;

        //mostrar resultado volume
        box_resultado_calculo_piramide_quadrada.className = "show";

    }else if(calculo_escolhido_valor == "area"){

        //realizando o calculo
        var areaFaceLateral = (apotema * aresta_base)/2;
        var areaLateral = 4 * areaFaceLateral;
        var areaBase = (Math.pow(aresta_base,2));
        var resultadoArea = Math.round(areaBase + areaLateral);

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Área Total(A):"
        unidade_medida.innerHTML = "cm²"
        resultado_volume_area.innerHTML = resultadoArea
        

        //mostrar resultado volume
        box_resultado_calculo_piramide_quadrada.className = "show";


    }

}

