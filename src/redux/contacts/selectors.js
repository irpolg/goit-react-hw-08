import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filterSlice";


export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector  (
    [selectContacts, selectNameFilter],
    (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
})