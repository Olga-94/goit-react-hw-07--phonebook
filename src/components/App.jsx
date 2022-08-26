import React from 'react';
import { Box } from 'components/Box';
import { Title } from './Title/Title';
import { BaseForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/List';

export const App = () => {
    return (
      <Box 
      width="500px"
      bg="backgroundSection"
      boxShadow="outline"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="20px auto"
      borderRadius="4px"
      flexDirection="column"
      >
      <Title title={'Phonebook'} />
      <BaseForm />
      <Title title={'Contacts'} /> 
      <Filter />
      <ContactList />
     </Box>
    );
  }
