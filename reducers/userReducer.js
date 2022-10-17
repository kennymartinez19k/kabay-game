import {ADD_USER, SET_USERS, REMOVE_USER, EDIT_USER} from '../constants';
const INITIAL_STATE = {
  all_user: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, all_user: action.payload};

    case REMOVE_USER:
      const newRemoveListed = [...state.all_user];
      newRemoveListed.splice(action.payload, 1);
      return {...state, all_user: newRemoveListed};
    case EDIT_USER:
      const newEditedListed = [...state.all_user];
      newEditedListed[action.payload.index] = action.payload.user;
      return {...state, all_user: newEditedListed};

    case ADD_USER:
      // copy the object
      const newAllUsers = [...state.all_user];
      console.log('Users: ', newAllUsers);
      console.log('user to add: ', action.payload);
      // put object in new object
      newAllUsers.push(action.payload);

      // update the redux state to reflect the change
      return {...state, all_user: newAllUsers};

    default:
      return state;
  }
};

export default userReducer;
