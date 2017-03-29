import { observer } from 'mobx-react';
import React from 'react';

@observer(['todo'])
class Todo extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
    resultado : '0,00',

    };
  }

  handleChange(e) {

    var idade_est_vida = 100;
    var retorno_liquido = 1 + parseInt(this.taxaRentabilidade.value) * 0.85 - parseInt(this.inflacao.value );

    var retorno_diaria_real = retorno_liquido ** (1/365);
    var retorno_mensal_real = retorno_liquido ** (1/12);

    var meses_para_aposentar = (parseInt(this.idadeAposentadoria.value) - parseInt(this.idadeAtual.value)) * 12;

    var meses_aponsentadoria = (parseInt(idade_est_vida) - parseInt(this.idadeAposentadoria.value)) *12;

    var saldoAposentadoria = parseInt(this.aporteInicial.value);
    var juroMensal = 0;

    for (var i = 0; i < parseInt(meses_para_aposentar); i++) {
      juroMensal += i;

      juroMensal = saldoAposentadoria * (parseInt(this.taxaRentabilidade.value) / 100 / 12);

      saldoAposentadoria = saldoAposentadoria + parseInt(this.depositoMensal.value) + juroMensal;

    };

    this.setState({resultado : saldoAposentadoria.toFixed(2) });
    e.preventDefault();
  }




  render() {
    return (
      <div class="content">
        <h1>Simulador aposentadoria</h1>
        <br/>

        <form onSubmit={this.handleChange}>

              <label htmlFor="idadeAtual">Idade atual:</label>
              <input type="text" ref={ref=>(this.idadeAtual=ref)} defaultValue="48"/>
              <br/>
              <label htmlFor="aporteInicial">Aporte Inicial:</label>
              <input type="text" ref={ref=>(this.aporteInicial=ref)}  defaultValue="100000"/>
              <br/>

              <label htmlFor="depositoMensal">Deposito mensal:</label>
              <input type="text" ref={ref=>(this.depositoMensal=ref)}  defaultValue="1000"/>
              <br/>

              <label htmlFor="taxaRentabilidade">Taxa rentabilidade anual (%):</label>
              <input type="text" ref={ref=>(this.taxaRentabilidade=ref)} defaultValue="10"/>
              <br/>

              <label htmlFor="inflacao">Inflacao anual:</label>
              <input type="text" ref={ref=>(this.inflacao=ref)}  defaultValue="5"/>
              <br/>

              <hr/>

              <label htmlFor="idadeAposentadoria1">Idade que pretende aposentar:</label>
              <input type="text" onBlur={this.handleIdade} ref={ref=>(this.idadeAposentadoria=ref)} defaultValue="65"/>
              <br/>

              <label htmlFor="tempoContribuicao1">Tempo contribuicao (anos):</label>
              <input type="text" onBlur={this.handleTempo} ref={ref=>(this.tempoContribuicao=ref)}  defaultValue="17"/>
              <br/>

              <label  htmlFor="saqueMensal">Retirada mensal apos aposentadoria:</label>
              <input type="text" ref={ref=>(this.saqueMensal=ref)} defaultValue="2000"/>
              <br/><br/>

            Saldo estimado na data da aposentadoria:  {this.state.resultado}

            <br/><input type="submit" value="  Calcular  " /><br/>

        </form>
      </div>
    );
  }
}

Todo.propTypes = { todo: React.PropTypes.func };

export default Todo;
