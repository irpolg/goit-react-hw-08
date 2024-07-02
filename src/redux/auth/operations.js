// 

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
//axios.defaults.baseURL = 'https://connections-api.goit.global/';

//встановлення токена авторизації в заголовки запитів
const setHeaderToken = (token) => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

//очищення заголовків авторизації
const clearHeaderToken = () => {
	axios.defaults.headers.common['Authorization'] = ''
}

//реєстрація нового користувача
export const register = createAsyncThunk(
	'auth/register',
    async (userData, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('users/signup', userData)
			setHeaderToken(data.token)
			return data
		} catch (error) {
            return rejectWithValue(error.message)
		}
	}
)

//вхід користувача
export const login = createAsyncThunk(
	'auth/login',
        async (userData, { rejectWithValue }) => {
		try {
            const { data } = await axios.post('users/login', userData)
            setHeaderToken(data.token)
			return data
		} catch (error) {
            return rejectWithValue(error.message)
		}
	}
)

//вихід користувача
export const logOut = createAsyncThunk(
	'auth/logOut',
    async (_, { rejectWithValue }) => {
		try {
			await axios.post('users/logout')
			clearHeaderToken()
		} catch (error) {
            return rejectWithValue(error.message)
		}
	}
)

//оновлення користувача з токеном
export const refreshUser = createAsyncThunk(
	'auth/refresh',
    async (_, thunkAPI) => {
        //отримуємо поточний стан з thunkAPI
        const state = thunkAPI.getState();
        //отримуємо збережений токен з стану auth
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user")
        } 
        try {
            //встановлюємо збережений токен авторизації
            setHeaderToken(persistedToken);
            //const { data } = await axios.post('users/refresh');
            const { data } = await axios.get('users/refresh');
            return data;
		} catch (error) {
            return thunkAPI.rejectWithValue(error.message);
		}
	}
)