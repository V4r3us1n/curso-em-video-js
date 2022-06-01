function submit() {
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passos = document.getElementById("passos");
    var contar = document.querySelector("section#contar")
    var contagem = [];

    if ((inicio.value == "")) {
        alert("Impossível fazer a contagem, por favor insira um valor de início!")
    } else {
        if (fim.value == "") {
            fim.value = 1;
        }
        if (passos.value == "") {
            passos.value = 1;
        }

        inicio = Number(inicio.value);
        fim = Number(fim.value);
        passos = Number(passos.value);
        if ((fim < inicio) || (passos <= 0)) {
            alert("Impossível fazer a contagem, certifique-se que o valor de passos seja maior que 0 e que o FIM seja maior que o INICIO!")
        } else {
            for (c = inicio; c <= fim; c = c + passos) {
                if (c + passos <= fim) {
                    contagem += c + ",";
                } else {
                    contagem += c + "!";
                }
            }
            contar.innerHTML = contagem;
        }
    } 
}
