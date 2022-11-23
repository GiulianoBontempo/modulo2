function verificarPalindromismo(){
    let divSaida = document.getElementById("saida");
    let stringDoNumero = parseInt(document.getElementById("seraQueEPalindromo").value).toString();
    let arrayDoNumero = stringDoNumero.split('');
    let arrayReversa = arrayDoNumero.reverse();
    let stringDoNumeroReversoComVirgulas = arrayReversa.toString();
    let stringDoNumeroReverso = stringDoNumeroReversoComVirgulas.replaceAll(',', '')
    if (stringDoNumero === stringDoNumeroReverso){
        divSaida.innerHTML = 'É um palíndromo! :)'
        console.log(stringDoNumero + ' ' + stringDoNumeroReverso)
    } else{
        divSaida.innerHTML = 'Não é um palíndromo! :('
    }
}
