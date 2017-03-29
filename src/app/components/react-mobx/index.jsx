import { observer } from 'mobx-react';
import React from 'react';

@observer(['todo'])
class Todo extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.todo.add(this.input.value);
    this.input.value = '';
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>React + Mobx Example</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" required="true" ref={e => (this.input = e)} />
          <input type="submit" value="Add" />
        </form>
        <div className="list">
          {
            this.props.todo.data
            .map((todo, i) => (<div key={i}>{`${i + 1} - ${todo}`}</div>))
          }
        </div>
      </div>
    );
  }
}

Todo.propTypes = { todo: React.PropTypes.func };

export default Todo;
