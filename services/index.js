import MockService from './mock.service';
import MockUserService from './mock.user.service';
import UserService from './user.service';
import BaseService from './base.service';
const services = {
  // product: new MockService('product'),
  user: new MockService('user'),
  // company: new MockService('company', []),
};

export default services;
