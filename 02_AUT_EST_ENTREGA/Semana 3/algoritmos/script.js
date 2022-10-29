function alturaMaxima(){
    var v0 = parseInt(document.getElementById("v0").value);
    const g = 10;
    var altura = v0*v0 / (2*g);
    var tempo = v0 / g;
    document.getElementById("altura").innerHTML = `${altura}`;
    document.getElementById("tempo").innerHTML = `${tempo}`;
}

function parabola(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var delta = b*b - 4*a*c;
    var x = -b/(2*a);
    var y = -delta / (4*a);
    if (a > 0){
        document.getElementById("ponto").innerHTML = `Ponto mínimo: (${x}, ${y})`;
    }
    else{
        document.getElementById("ponto").innerHTML = `Ponto máximo: (${x}, ${y})`;
    }
}

function temperatura(escala){
    var valor = parseInt(document.getElementById("inputTemperatura").value);
    var resultado = 0;
    if (escala == 'fahrenheit'){
        resultado = (9 * valor) / 5 + 32;
        document.getElementById("graus").innerHTML = `${resultado} graus fahrenheit`;
    }
    else if (escala == 'celsius'){
        resultado = 5 * (valor - 32) / 9;
        document.getElementById("graus").innerHTML = `${resultado} graus celsius`;
    }
}

function consumo(){
    var consumokwh = parseInt(document.getElementById("consumokwh").value);
    var valorUnitario = parseInt(document.getElementById("valorUnitario").value);
    total = consumokwh * valorUnitario;
    if (consumokwh > 100 && consumokwh < 200){
        total = total * 1.25;
    }
    else if (consumokwh > 200){
        total = total * 1.5;
    }
    document.getElementById("consumo").innerHTML = `${total} reais`;
}