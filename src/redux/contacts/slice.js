import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './operations'; 
import { logOut } from '../auth/operations';

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
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.error = null;
                state.isLoading = false;
    })
    
});    

export const contactsReducer = contactsSlice.reducer;