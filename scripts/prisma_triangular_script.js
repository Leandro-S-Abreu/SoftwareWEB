function possibilidade_equilatero(){

    //buscar a possibilidade escolhida no HTML
    var possibilidade_escolhida = document.getElementById("possibilidade_equilatero");
    var possibilidade_escolhida_valor = possibilidade_escolhida.value;
    var valor_altura_triangulo_display = document.getElementsByClassName("valor_altura_triangulo");
    
    //armazenar os dados em uma array
    var tamanho_valor_altura_triangulo = valor_altura_triangulo_display.length;

    //alterar a classe da array
    if (possibilidade_escolhida_valor == "sim"){
        for (var i=0; i<tamanho_valor_altura_triangulo; i++) {
            valor_altura_triangulo_display[i].style.display = "none"
          }
        }else if(possibilidade_escolhida_valor == "nao"){
            for (var i=0; i<tamanho_valor_altura_triangulo; i++) {
                valor_altura_triangulo_display[i].style.display = "inline-flex"
            }
        }
        
}

function calcularVolumeArea(){

    //buscar valores no HTML
    var possibilidade_escolhida = document.getElementById("possibilidade_equilatero");
    var possibilidade_escolhida_valor = possibilidade_escolhida.value;
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var aresta_base = document.getElementById("valor_aresta_base").value ;
    var altura_prisma = document.getElementById("valor_altura_prisma").value;
    var altura_triangulo = document.getElementById("valor_altura_triangulo").value;
    var resultado_volume_area = document.getElementById("volume_area_resultado");
    var box_resultado_calculo_prisma_triangular = document.getElementById("box_resultado_calculo_de_prisma_triangular");
    var tipo_resposta = document.getElementById("volume_area_texto");
    var unidade_medida = document.getElementById("cm3");
  
    //definindo o calculo a ser executado

    //caso seja volume e o triangulo for equilatero
    if ((calculo_escolhido_valor == "volume") && (possibilidade_escolhida_valor == "sim")){
    
        //realizando o calculo
        var areaBase = (Math.pow(aresta_base,2) * Math.sqrt(3) / 4)
        var resultadoVolume = Math.round(areaBase * altura_prisma);

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Volume(V):"
        unidade_medida.innerHTML = "cm³"
        resultado_volume_area.innerHTML = resultadoVolume;

        //mostrar resultado volume
        box_resultado_calculo_prisma_triangular.className = "show";

    //caso seja volume e o triangulo não for equilatero    
    }else if((calculo_escolhido_valor == "volume") && (possibilidade_escolhida_valor == "nao")){

        //realizando o calculo
        var areaBase = (aresta_base * altura_triangulo / 2);
        var resultadoVolume = Math.round(areaBase * altura_prisma);

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Volume(V):"
        unidade_medida.innerHTML = "cm³"
        resultado_volume_area.innerHTML = resultadoVolume;
        

        //mostrar resultado volume
        box_resultado_calculo_prisma_triangular.className = "show";

    //caso seja area e o triangulo for equilatero
    }else if(calculo_escolhido_valor == "area" && possibilidade_escolhida_valor == "sim"){

        //realizando o calculo
        var areaBase = (Math.pow(aresta_base,2) * Math.sqrt(3) / 4);
        var areaLateral = 3 * aresta_base * altura_prisma;
        var resultadoArea = Math.round(2 * areaBase) + areaLateral; 

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Área Total(A):"
        unidade_medida.innerHTML = "cm²"
        resultado_volume_area.innerHTML = resultadoArea

         //mostrar resultado area
         box_resultado_calculo_prisma_triangular.className = "show";

    //caso seja area e o triangulo não for equilatero     
    }else if(calculo_escolhido_valor == "area" && possibilidade_escolhida_valor == "nao"){

        //realizando o calculo
        var areaBase = (Math.floor(aresta_base * altura_triangulo / 2));
        var areaLateral = 3 * aresta_base * altura_prisma;
        var resultadoArea = Math.round(2 * areaBase) + areaLateral; 

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Área Total(A):"
        unidade_medida.innerHTML = "cm²"
        resultado_volume_area.innerHTML = resultadoArea

         //mostrar resultado area
         box_resultado_calculo_prisma_triangular.className = "show";

}

}

