import { observer } from 'mobx-react';
import React, { Component } from 'react';

@observer(['todo'])
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: undefined,
      },
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="header">
          <svg className="header__logo" width="512" height="124" viewBox="0 0 512 124" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M311.574 72V51.1h17.321c8.148 0 11.835 4.876 11.835 10.451 0 5.568-3.686 10.45-11.835 10.45h-17.321zm40.696-10.45c0-12.24-8.552-21.393-22.486-21.393h-29.758v63.74h11.547V82.945h14.134L339.67 103.9h14.532l-16.555-23.541c8.357-2.591 14.623-9.751 14.623-18.807zm13.933 42.348h11.543v-63.74h-11.543v63.74zM286.24 22.43l-22.613 2.857v6.653h22.613v-9.51zm-42.015 81.469h42.015V92.953h-30.474V77.269h25.377V66.324h-25.377V51.1h30.474V40.157h-42.015V103.9zm229.455-47.79c.355-3.774 4.359-8.095 13.87-7.21 4.275.405 8.02 1.716 11.667 4.59l6.738-8.689c-4.67-3.053-10.321-4.936-16.914-5.555-14.158-1.32-26.465 5.225-27.506 16.327-2.356 25.363 39.015 15.731 37.724 29.604-.552 5.945-7.005 8.64-15.734 7.93-6.087-.568-12.02-2.812-16.072-6.95l-6.61 8.52c6.425 5.758 14.15 8.625 21.173 9.28 14.261 1.33 28.17-5.265 29.384-18.24 2.417-25.87-39.02-15.64-37.72-29.608zM420.962 39.42c-17.61 0-31.89 14.57-31.89 32.542 0 17.97 14.28 32.543 31.89 32.543 17.607 0 31.885-14.574 31.885-32.543 0-17.972-14.278-32.542-31.885-32.542zm0 54.154c-11.565 0-20.967-9.695-20.967-21.612 0-11.916 9.402-21.615 20.967-21.615 11.55 0 20.952 9.698 20.952 21.615 0 11.918-9.401 21.612-20.952 21.612zM222.805 40.157l-20.258 46.577-20.323-46.577h-12.418l27.586 63.789h10.7l20.756-48.302 6.655-15.487h-12.698z" fill="#74697B" /><path d="M106.306 123.8c-3.879-.456-6.165-3.6-7.777-6.987L74.944 64.37l-.56-.352-.614.372-23.503 52.424c-1.52 3.698-3.736 6.541-7.858 6.997.603.069 1.528.069 1.108.069h61.55c-.445 0 .84-.028 1.24-.079" fill="#5c4562" /><path d="M101.96.192L74.385 64.023l23.163 53.485c1.608 3.377 5.1 6.097 8.73 6.29 4.298-.239 7.157-2.882 8.777-6.264L165.757.192H101.96" fill="#25bcbd" /><path d="M63.999 40.029L0 40.129l33.418 77.055c1.568 3.587 4.468 6.293 9.023 6.622 4.274-.327 7.538-3.16 9.054-6.849l.011.022 22.878-52.962L63.998 40.03" fill="#ef534f" /></svg>
        </div>
        <div className="menu btn-group" role="group" >
          <a href="#state" className="btn btn-default">state example</a>
          <a href="#event" className="btn btn-default">event binding example</a>
          <a href="#mobx" className="btn btn-default">
            simple mobx example
            {this.props.todo.count && <div>{this.props.todo.count}</div>}
          </a>
          <a href="#apos" className="btn btn-default">simulador aposentadoria</a>
        </div>
        <div className="wrapper">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

App.propTypes = { todo: React.PropTypes.func };

export default App;
