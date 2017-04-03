import { observer } from 'mobx-react';
import React from 'react';
import CurrencyInput from 'react-currency-input';
import autobind from 'autobind-decorator';

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
        taxaRentabilidade: this.taxaRentabilidade.state.value ,
        inflacao: this.inflacao.state.value,
        idadeAposentadoria: this.idadeAposentadoria.state.value,
        idadeAtual: this.idadeAtual.state.value,
        aporteInicial: this.aporteInicial.state.value,
        depositoMensal: this.depositoMensal.state.value,
      });
    e.preventDefault();
  }

  handleIdade(e) {
    console.log(parseInt(this.idadeAposentadoria.state.value) - parseInt(this.idadeAtual.state.value));
    console.log("tempoContribuicao:" + this.tempoContribuicao.state.value);
    this.tempoContribuicao.state.value = parseInt(this.idadeAposentadoria.state.value) - parseInt(this.idadeAtual.state.value);
    /*this.props.aposentadoria.updateControls({ tempoContribuicao: this.tempoContribuicao.state.value })*/
  }


  handleTempo(e) {
    console.log(parseInt(this.idadeAtual.state.value) + parseInt(this.tempoContribuicao.state.value));
    console.log("idadeAposentadoria:" + this.idadeAposentadoria.state.value) ;
    this.idadeAposentadoria.state.value = parseInt(this.idadeAtual.state.value) + parseInt(this.tempoContribuicao.state.value);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-8">
              <div className="panel panel-default">

                <div className="panel-heading">
                  Gráfico
                </div>

                <div className="panel-body">
                    <img src="chart.png" width="100%" alt="Exemplo de grafico"></img>
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Simulador aposentadoria
                </div>

                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form role="form" onSubmit={this.handleChange}>
                        <div className="form-group">
                          <label htmlFor="idadeAtual">Idade atual:</label>
                          <CurrencyInput className="form-control" placeholder="Informe a sua idade atual" type="text" ref={ref=>(this.idadeAtual=ref)} value='48' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="aporteInicial">Aporte Inicial:</label>
                          <CurrencyInput prefix="R$" className="form-control" decimalSeparator="," thousandSeparator="."  placeholder="Informe quanto pretende investir agora"  type="text"  ref={ref=>(this.aporteInicial=ref)} value='100000' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="depositoMensal">Deposito mensal:</label>
                          <CurrencyInput  prefix="R$" className="form-control" placeholder="Informe quanto pretende investir mensalmente" type="text"  ref={ref=>(this.depositoMensal=ref)}  value='1000' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="taxaRentabilidade">Taxa de rentabilidade anual (%):</label>
                          <CurrencyInput className="form-control" suffix="%"  type="text" placeholder="Informe qual é a rentabilidade projetada"  ref={ref=>(this.taxaRentabilidade=ref)} value='10' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inflacao">Inflacao anual:</label>
                          <CurrencyInput className="form-control" suffix="%" type="text" placeholder="Informe qual é a inflação futura projetada" ref={ref=>(this.inflacao=ref)}  value='5' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="idadeAposentadoria">Idade que pretende aposentar:</label>
                          <CurrencyInput className="form-control" type="text"   placeholder="Informe a idade que pretende aposentar" onChange={this.handleIdade} ref={ref=>(this.idadeAposentadoria=ref)} value='65' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="tempoContribuicao">Tempo de investimento (anos):</label>
                          <CurrencyInput className="form-control" type="text"  placeholder="Informe quantos anos pretende investir" onChange={this.handleTempo} ref={ref=>(this.tempoContribuicao=ref)}  value='17' precision='0'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="saqueMensal">Retirada mensal apos aposentadoria:</label>
                          <CurrencyInput  prefix="R$" className="form-control" type="text"  placeholder="Informe quanto pretende retirar apos data de aposentadoria" ref={ref=>(this.saqueMensal=ref)} value='2000' precision='0'/>
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
