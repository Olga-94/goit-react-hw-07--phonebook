import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.getIsLoading;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector([getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    })