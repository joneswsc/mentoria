import React from 'react';

class Todo extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const todo = this.state.todo;
    todo.push(this.input.value);
    this.input.value = '';
    this.setState({ todo });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Event binding example</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" required="true" ref={e => (this.input = e)} />
          <input type="submit" value="Add" />
        </form>
        <div className="list">
          {
            this.state.todo
              .map((todo, i) => (<div key={i}>{`${i + 1} - ${todo}`}</div>))
          }
        </div>
      </div>
    );
  }
}

export default Todo;
