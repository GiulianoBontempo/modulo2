function jurosSimples(){
    const saidaJuros = document.getElementById("juros");
    const saidaMontante = document.getElementById("montante");
    let p = parseFloat(document.getElementById("capital").value);
    let tempo = parseInt(document.getElementById("n").value);
    let i = parseFloat(document.getElementById("i").value);
    let juros;
    let montante;
    let n;

    n = tempo / 360;

    juros = p * i * n;
    montante = p * (1 + (i * n));

    saidaJuros.innerHTML = juros;
    saidaMontante.innerHTML = montante;
}