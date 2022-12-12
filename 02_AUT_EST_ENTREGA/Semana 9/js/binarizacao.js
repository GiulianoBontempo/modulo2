function zeroOuUm(decimal, binario, limite){
    if (decimal >= limite){
        binario += '1';
        decimal -= limite;
    } else{
        binario += '0'
    }
    return [decimal, binario];
} 

function binarizar(){
    let decimal = parseInt(document.getElementById("numero").value);
    let divSaida = document.getElementById("saida");
    let binario = '';

    for (let limite of [128, 64, 32, 16, 8, 4, 2, 1]){
        let decimalEBinario = zeroOuUm(decimal, binario, limite);
        decimal = decimalEBinario[0];
        binario = decimalEBinario[1];
    }
    divSaida.innerHTML = binario;
}