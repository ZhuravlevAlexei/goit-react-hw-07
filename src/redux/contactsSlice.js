import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = false;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    // sortContacts(state) {
    //   state.items.sort((a, b) => a.name.localeCompare(b.name));
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.items.sort((a, b) => a.name.localeCompare(b.name));
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        state.items.sort((a, b) => a.name.localeCompare(b.name));
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const selectContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
export const getSortedByName = state => state.contacts.sortedByName;

export const { sortContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
