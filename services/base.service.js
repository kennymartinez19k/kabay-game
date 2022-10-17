import axios from 'axios';
import {HOST} from 'react-native-dotenv';

class BaseService {
  constructor(controller) {
    this.controller = controller;
  }

  async getAll(config = null) {
    let response = await axios.get(`${HOST}/api/${this.controller}`, config);
    if (response.status == 404) {
      alert('Error no se pudo conectar con el backend');
      return [];
    }
    return response.data;
  }

  async get(id, config = null) {
    let response = await axios.get(
      `${HOST}/api/${this.controller}/${id}`,
      config,
    );
    if (response.status == 404) {
      alert('Error no se pudo conectar con el backend');
      return null;
    } else return response.data;
  }

  async create(data, config = null) {
    return await axios.post(`${HOST}/api/${this.controller}`, data, config);
  }

  async update(id, data, config = null) {
    return await axios.put(
      `${HOST}/api/${this.controller}/${id}`,
      data,
      config,
    );
  }

  async delete(id, config = null) {
    return await axios.delete(`${HOST}/api/${this.controller}/${id}`, config);
  }
}

export default BaseService;
