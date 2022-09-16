import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from '../Form/Form.styled';
// import contactsActions from '../../redux/actions';
import { selectors, actions } from '../../redux/index-export';

export const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.contacts.filter); 
  return (
      <Label>
        Find contacts by name
        <Input 
        type="text" 
        name="filter" 
        value={value} 
        onChange={(e) => dispatch(actions.changeFilter(e.currentTarget.value))} />
      </Label>
    );
  };