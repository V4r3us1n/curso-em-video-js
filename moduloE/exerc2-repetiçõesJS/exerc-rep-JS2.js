function GerarTabuada() {
    var n = document.getElementById("numero");
    var tabuada = document.querySelector("section#tabuada");

    if (n.value == "") {
        alert("[ERRO!] Insira um número para que possa ser feito uma tabuada!")
    } else {
        n = Number(n.value);
        tabuada.innerHTML = "";

        for (c = 1; c <= 10; c++) {
            var mul = n * c;
            tabuada.innerHTML += `${n} * ${c} = ${mul}` + "<br>"
        }
    }
}