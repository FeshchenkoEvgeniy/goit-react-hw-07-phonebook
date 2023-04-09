import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.value;

export const selectFilterContacts = createSelector(
  [selectContact, selectFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
