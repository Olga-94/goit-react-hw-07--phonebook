import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../redux/actions';
  
const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
        if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
            alert(`${payload.name} is already in contacts`);
            return state;
        }
        return [payload, ...state]
    } ,
        
        
    [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
})

const filter = createReducer("", {
    [actions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
    items,
    filter,
})