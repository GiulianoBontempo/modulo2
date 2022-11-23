function calcularNumeroDeAzulejos(){
    let saida = document.getElementById("saida");
    let ladoAzulejo = parseFloat(document.getElementById("ladoAzulejo").value);
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let altura = parseFloat(document.getElementById("altura").value);
    console.log(comprimento)
    console.log(altura)
    let area = comprimento * 100 * altura * 100
    let areaAzulejo = ladoAzulejo * ladoAzulejo;
    console.log(areaAzulejo.toString() + ' ' + area.toString())
    let numeroDeAzulejosSemSobra = Math.ceil(area / areaAzulejo)
    let numeroDeAzulejos = Math.ceil(numeroDeAzulejosSemSobra * 1.05)
    console.log(numeroDeAzulejos)
    saida.innerHTML = 'você precisa de no mínimo ' + numeroDeAzulejos.toString() + ' azulejos.'
}