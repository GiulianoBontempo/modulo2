function impressao(){
    texto = document.getElementById("texto").value;
    divSaida = document.getElementById("saida");
    saida = '';
    espacos = '';
    for (let caractere of texto){
        saida += '<br>' + espacos + caractere;
        espacos += '&nbsp &nbsp';
    }
    divSaida.innerHTML = saida;
}