import { observer } from 'mobx-react';
import React from 'react';
import CurrencyInput from 'react-currency-input';

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
      <div id="wrapper">
        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Simulador aposentadoria
                </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form role="form" onSubmit={this.handleChange}>
                      <div className="form-group">
                        <label htmlFor="idadeAtual">Idade atual:</label>
                        <input className="form-control"  ref={ref=>(this.idadeAtual=ref)} defaultValue="48"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="aporteInicial">Aporte Inicial:</label>
                        <input className="form-control" type="text"  ref={ref=>(this.aporteInicial=ref)}  defaultValue="100000"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="depositoMensal">Deposito mensal:</label>
                        <input className="form-control" type="text"  ref={ref=>(this.depositoMensal=ref)}  defaultValue="1000"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="taxaRentabilidade">Taxa de rentabilidade anual (%):</label>
                        <input className="form-control" type="text"  ref={ref=>(this.taxaRentabilidade=ref)} defaultValue="10"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inflacao">Inflacao anual:</label>
                        <input className="form-control" type="text"  ref={ref=>(this.inflacao=ref)}  defaultValue="5"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="idadeAposentadoria1">Idade que pretende aposentar:</label>
                        <input className="form-control" type="text"  onBlur={this.handleIdade} ref={ref=>(this.idadeAposentadoria=ref)} defaultValue="65"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="tempoContribuicao1">Tempo de contribuicao (anos):</label>
                        <input className="form-control" type="text"  onBlur={this.handleTempo} ref={ref=>(this.tempoContribuicao=ref)}  defaultValue="17"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="saqueMensal">Retirada mensal apos aposentadoria:</label>
                        <input className="form-control" type="text"  ref={ref=>(this.saqueMensal=ref)} defaultValue="2000"/>
                      </div>
                      <div className="form-group">
                        <label for="disabledSelect">Saldo estimado na data da aposentadoria: </label>
                        {this.props.aposentadoria.resultado}
                      </div>
                      <div className="btn-toolbar">
                        <button type="submit" className="btn btn-default">Calcular</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

Aposentadoria.propTypes = { aposentadoria: React.PropTypes.func };

export default Aposentadoria;
