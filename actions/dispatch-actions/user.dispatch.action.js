import {setUsers, addUser, removeUser, editUser} from '../actions/user.action';
import services from '../../services';
export function getUsers(config = null) {
  return async dispatch => {
    const resp = await services.user.getAll(config);
    dispatch(setUsers(resp.results));
  };
}
export function createUser(config = null) {
  return async dispatch => {
    const newUser = {name: 'Emy'};
    const resp = await services.user.create(newUser, config);
    dispatch(addUser(newUser));
  };
}

export function deleteUser(id, index, config = null) {
  return async dispatch => {
    const resp = await services.user.delete(id, config);
    dispatch(removeUser(index));
  };
}

export function updateUser(id, user, index, config = null) {
  return async dispatch => {
    const resp = await services.user.update(id, user, config);
    dispatch(editUser(index, user));
  };
}
