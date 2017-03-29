import React from 'react';

class Hi extends React.Component {

  constructor() {
    super();

     this.handleClick = this.handleClick.bind(this);

    this.state = {
      msg: 'Hello World1',
      data : '',

    };
  }

 handleClick (e) {
    var data = new Date().toISOString();
    this.setState({data : data});
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>React state example</h1>
        {this.state.msg}
        <br/>
        <button type="button" onClick={this.handleClick}>Click Me!</button>
        <br/>
        Resultado :  {this.state.data}
        <br/>
      </div>

    );
  }
}

export default Hi;
