import { observable, action } from 'mobx';

class AposentadoriaStore {
  @observable resultado = undefined;

  @action calcular({taxaRentabilidade, inflacao, idadeAposentadoria, idadeAtual, aporteInicial, depositoMensal }) {

    var idade_est_vida = 100;
    var retorno_liquido = 1 + parseInt(taxaRentabilidade) * 0.85 - parseInt(inflacao);
    var retorno_diaria_real = retorno_liquido ** (1/365);
    var retorno_mensal_real = retorno_liquido ** (1/12);
    var meses_para_aposentar = (parseInt(idadeAposentadoria) - parseInt(idadeAtual)) * 12;
    var meses_aponsentadoria = (parseInt(idade_est_vida) - parseInt(idadeAposentadoria)) *12;
    var saldoAposentadoria = parseInt(aporteInicial);
    var juroMensal = 0;
    for (var i = 0; i < parseInt(meses_para_aposentar); i++) {
      juroMensal += i;
      juroMensal = saldoAposentadoria * (parseInt(taxaRentabilidade) / 100 / 12);
      saldoAposentadoria = saldoAposentadoria + parseInt(depositoMensal) + juroMensal;
    };
    this.resultado = saldoAposentadoria.toFixed(2);
  }
}

export default AposentadoriaStore;
