class MockService {
  constructor(controller, initialData = []) {
    this.controller = controller;
    this.listed = initialData;
    this.counter = 1;
  }
  async getAll(config = null) {
    return {results: [...this.listed]};
  }

  async get(id, config = null) {
    let item = this.listed.find(x => x.id == id);
    return item;
  }

  async create(data, config = null) {
    data.id = this.counter;
    this.counter += 1;
    this.listed.push(data);
  }

  async update(id, data, config = null) {
    let itemIndex = this.listed.findIndex(x => x.id == id);
    if (itemIndex > -1) {
      this.listed[itemIndex] = data;
    }
  }

  async delete(id, config = null) {
    let itemIndex = this.listed.findIndex(x => x.id == id);
    this.listed.splice(itemIndex, 1);
  }
}

export default MockService;
