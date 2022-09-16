import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {changeFilter} from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

})

const error = createReducer(null, {
    [fetchContacts.pending]: null,
    [fetchContacts.rejected]: (_, action) => action.payload,
    [addContact.pending]: null,
    [addContact.rejected]: (_, action) => action.payload,
    [deleteContact.pending]: null,
    [deleteContact.rejected]: (_,action) => action.payload,
})

const filter = createReducer("", {
    [changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
    items,
    isLoading,
    error,
    filter,
})


// const items = createReducer([], {
//     [actions.addContact]: (state, { payload }) => {
//         if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
//             alert(`${payload.name} is already in contacts`);
//             return state;
//         }
//         return [payload, ...state]
//     } ,
        
        
//     [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
// })

// const filter = createReducer("", {
//     [actions.changeFilter]: (_, action) => action.payload,
// })

// export default combineReducers({
//     items,
//     filter,
// })