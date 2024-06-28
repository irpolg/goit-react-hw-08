import { createSlice } from '@reduxjs/toolkit'
import {
	logOut,
	login,
	register,
} from './operations'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: null,
        isLoggedIn: false,
        isRefreshing: false,
	},
	extraReducers: (builder) => {
        builder
            .addCase(register.pending, state => {
                state.isLoggedIn = false;
                state.error = null;
            })
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
            .addCase(register.rejected, (state, {payload}) => {
                state.isLoggedIn = false;
                state.error = payload;
            })

            .addCase(login.pending, state => {
                state.isLoggedIn = false;
                state.error = null;
            })
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
            })
            .addCase(login.rejected, (state, {payload}) => {
                state.isLoggedIn = false;
                state.error = payload;
            })

            .addCase(logOut.pending, state => {
                state.isLoggedIn = true;
                state.error = null;
            })
			.addCase(logOut.fulfilled, (state) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = null
				state.isLoggedIn = false
            })
            .addCase(logOut.rejected, (state, {payload}) => {
                state.isLoggedIn = false;
                state.error = payload;
            })
	},
})

export const authReducer = authSlice.reducer
