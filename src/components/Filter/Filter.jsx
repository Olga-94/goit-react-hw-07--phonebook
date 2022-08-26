import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from '../Form/Form.styled';
import contactsActions from '../../redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter); 
  return (
      <Label>
        Find contacts by name
        <Input type="text" name="filter" value={filter} onChange={e => dispatch(contactsActions.changeFilter(e.currentTarget.value))} />
      </Label>
    );
  };