function calcularTabuada(){
    let principal = parseInt(document.getElementById("numeroPrincipalDaTabuada").value);
    let inicio = parseInt(document.getElementById("numeroDeInicioDaTabuada").value);
    let termino = parseInt(document.getElementById("numeroDeTerminoDaTabuada").value);
    let divResultado = document.getElementById("resultadoTabuada");
    let i = 0;
    let umDosResultados;
    let strResultado = '';

    while(i <= termino - inicio){
        umDosResultados = principal * (inicio + i);
        strResultado += umDosResultados.toString() + '<br/>';
        i += 1;
    }
    divResultado.innerHTML = strResultado;
}