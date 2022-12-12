function valorTemporal(tipo){
    let valor = parseFloat(document.getElementById("valor").value);
    let i = parseFloat(document.getElementById("taxa").value);
    let n = parseInt(document.getElementById("n").value);
    let divResultado = document.getElementById("resultado");
    let saida = '';
    if (parseInt(tipo) === 0){
        saida += valor * ((1 + i)**n);
    } else{
        saida += valor / ((1 + i)**n);
    }
    divResultado.innerHTML = saida;
}

