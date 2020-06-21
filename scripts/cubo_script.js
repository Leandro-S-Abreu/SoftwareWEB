function calculoAreaVolume(){

    //buscar o calculo escolhido no HTML
    var calculo_escolhido = document.getElementById("calculo_volume_area");
    var calculo_escolhido_valor = calculo_escolhido.value;
    var aresta = document.getElementById("valor_lado").value;
    var resultado_volume_area = document.getElementById("volume_area_resultado");
    var box_resultado_calculo_cubo = document.getElementById("box_resultado_calculo_cubo");
    var tipo_resposta = document.getElementById("volume_area_texto");
    var unidade_medida = document.getElementById("cm3");
    
    //definindo o calculo a ser executado

    if (calculo_escolhido_valor == "volume"){
    
        //realizando o calculo
        var resultadoVolume = Math.round(Math.pow(aresta, 3))

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Volume(V):"
        unidade_medida.innerHTML = "cm³"
        resultado_volume_area.innerHTML = resultadoVolume;

        //mostrar resultado volume
        box_resultado_calculo_cubo.className = "show";

    }else if(calculo_escolhido_valor == "area"){

        //realizando o calculo
        var areaBase = (aresta * aresta)
        var resultadoArea = Math.round( 6 * areaBase );

        //alterando o campo do HTML para o resultado correto
        tipo_resposta.innerHTML = "Área Total(A):"
        unidade_medida.innerHTML = "cm²"
        resultado_volume_area.innerHTML = resultadoArea
        

        //mostrar resultado volume
        box_resultado_calculo_cubo.className = "show";


    }
}
