import React from 'react';
import { ContactsList} from './contactList.styled';
import {ContactListItem} from './ListItem';
import { useSelector } from 'react-redux';

export const ContactList = (/*{ contacts, onDeleteContact }*/) => {
  const contacts = useSelector(state => state.contacts);
  const { items, filter } = contacts;

  const getVisibleContact = () => {
        const normalFilter = filter.toLowerCase();
        return items.filter(({ name }) =>
          name.toLowerCase().includes(normalFilter)
        );
  };

  return (
    <ContactsList>
      {getVisibleContact().map(({ id, name, number })=> (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ContactsList>
  );
};
