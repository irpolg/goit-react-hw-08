import { createSlice } from '@reduxjs/toolkit'

const initialFilterState = { name: "" };

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        changeFilter(state, {payload}) {
            state.name = payload
        }
    }
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;