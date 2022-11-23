function pi(){
    divSaida = document.getElementById("saida");
    limite = parseInt(document.getElementById("limite").value);
    resultado = [];
    i = 1
    while(i < limite){
        resultado.push(i);
        if(i%3 === 0){
            resultado.push('pi');
        }
        i += 1;
    }
    divSaida.innerHTML = resultado;
}