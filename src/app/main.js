var calculatarAposentadoria = function (aporteInicial, tempoContribuicao, inflacao, saqueMensal, depositoMensal, taxaRentabilidade, idadeAtual, idadeAposentadoria) {

    const idade_est_vida = 100;
    var retorno_liquido = 1 + parseInt(taxaRentabilidade) * 0.85 - parseInt(inflacao);
    var retorno_diaria_real = retorno_liquido ** (1/365);
    var retorno_mensal_real = retorno_liquido ** (1/12);
    var meses_para_aposentar = (parseInt(idadeAposentadoria) - parseInt(idadeAtual)) * 12;
    var meses_aponsentadoria = (parseInt(idade_est_vida) - parseInt(idadeAposentadoria)) *12;

    var saldoAposentadoria = parseInt(aporteInicial);
    var juromensal = 0;
    for (var i = 0; i < parseInt(meses_para_aposentar); i++) {
      juroMensal = parseInt(saldoAposentadoria) * (parseInt(taxaRentabilidade) / 100 / 12);
      saldoAposentadoria = saldoAposentadoria + parseInt(depositoMensal) + juroMensal;
    }

    return saldoAposentadoria;
};

document.getElementById('calcularBtn').addEventListener('click', function () {
    var aporteInicial = document.getElementById("aporteInicial").value;
    var tempoContribuicao = document.getElementById("tempoContribuicao").value;
    var inflacao = document.getElementById("inflacao").value;
    var idadeAtual = document.getElementById("idadeAtual").value;
    var depositoMensal = document.getElementById("depositoMensal").value;
    var saqueMensal = document.getElementById("saqueMensal").value;
    var idadeAposentadoria = document.getElementById("idadeAposentadoria").value;
    var taxaRentabilidade = document.getElementById("taxaRentabilidade").value;
    var valorFinal = calculatarAposentadoria(aporteInicial, tempoContribuicao, inflacao, saqueMensal, depositoMensal, taxaRentabilidade, idadeAtual, idadeAposentadoria);
    document.getElementById("saldoAposentadoria").innerHTML = valorFinal.toFixed(2);
});

document.getElementById('idadeAposentadoria').addEventListener('change', function () {
    document.getElementById("tempoContribuicao").value = document.getElementById("idadeAposentadoria").value - document.getElementById("idadeAtual").value;
});

document.getElementById('tempoContribuicao').addEventListener('change', function () {
    document.getElementById("idadeAposentadoria").value = (parseInt(document.getElementById("tempoContribuicao").value) + parseInt(document.getElementById("idadeAtual").value));
});
