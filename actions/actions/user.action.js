import {ADD_USER, SET_USERS, REMOVE_USER, EDIT_USER} from '../../constants';

export const addUser = user => ({
  type: ADD_USER,
  payload: user,
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});

export const removeUser = index => ({
  type: REMOVE_USER,
  payload: index,
});

export const editUser = (index, user) => ({
  type: EDIT_USER,
  payload: {index, user},
});
