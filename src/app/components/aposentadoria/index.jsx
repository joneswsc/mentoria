import { observer } from 'mobx-react';
import React from 'react';

@observer(['aposentadoria'])
class Aposentadoria extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleTempo = this.handleTempo.bind(this);
    this.handleIdade = this.handleIdade.bind(this);
    this.state = {
    resultado : '0,00',
    };
  }

  handleChange(e) {

    this.props.aposentadoria.calcular({
        taxaRentabilidade: this.taxaRentabilidade.value ,
        inflacao: this.inflacao.value,
        idadeAposentadoria: this.idadeAposentadoria.value,
        idadeAtual: this.idadeAtual.value,
        aporteInicial: this.aporteInicial.value,
        depositoMensal: this.depositoMensal.value,
      });
    e.preventDefault();
  }

  handleIdade(e) {
    this.tempoContribuicao.value = parseInt(this.idadeAposentadoria.value) - parseInt(this.idadeAtual.value);
  }

  handleTempo(e) {
    this.idadeAposentadoria.value = parseInt(this.idadeAtual.value) + parseInt(this.tempoContribuicao.value);
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
              <br/><hr/>
              <label htmlFor="idadeAposentadoria1">Idade que pretende aposentar:</label>
              <input type="text" onBlur={this.handleIdade} ref={ref=>(this.idadeAposentadoria=ref)} defaultValue="65"/>
              <br/>
              <label htmlFor="tempoContribuicao1">Tempo contribuicao (anos):</label>
              <input type="text" onBlur={this.handleTempo} ref={ref=>(this.tempoContribuicao=ref)}  defaultValue="17"/>
              <br/>
              <label  htmlFor="saqueMensal">Retirada mensal apos aposentadoria:</label>
              <input type="text" ref={ref=>(this.saqueMensal=ref)} defaultValue="2000"/>
              <br/><br/>

            Saldo estimado na data da aposentadoria:  {this.props.aposentadoria.resultado}

            <br/><input type="submit" value="  Calcular  " /><br/>
        </form>
      </div>
    );
  }
}

Aposentadoria.propTypes = { aposentadoria: React.PropTypes.func };

export default Aposentadoria;
