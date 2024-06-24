import { createSelector, createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './contactsOps'; 
import { selectNameFilter } from './filterSlice';

const initialContactsState = {
    items: [],
    isLoading: false,
    error: null,
}
 
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })

            .addCase(addContact.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items.push(payload)
            })
            .addCase(addContact.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })

            .addCase(deleteContact.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = state.items.filter(contact => contact.id !== payload);
            })
            .addCase(deleteContact.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;                
            }),
});    

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector  (
    [selectContacts, selectNameFilter],
    (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
})