import React from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import { Label, Button}  from './Form.styled';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';

export const BaseForm = () => {
  const dispatch = useDispatch();

  const addContact = (values, { resetForm }) => {
    values.id = nanoid();
    dispatch(contactsActions.addContact(values.name, values.number));
    resetForm();
  };
  
      return (
        <Formik initialValues={{name: '', number: ''}} onSubmit={addContact}>
        <Form>
          <Label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit"> <IoPersonAddOutline />Add contact</Button>
        </Form>
        </Formik>
      );
    
  }
  