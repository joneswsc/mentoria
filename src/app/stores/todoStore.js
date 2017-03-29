import { observable, action, computed } from 'mobx';

class TodoStore {
  @observable data = [];

  @action add(text) {
    this.data.push(text);
  }

  @computed get count() {
    return this.data.length > 0 ? this.data.length : undefined;
  }
}

export default TodoStore;
