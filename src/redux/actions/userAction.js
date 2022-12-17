import axios from 'axios';
import { server } from '../store';

export const registerUser = (name, email, password, avatar) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" });

        const { data } = await axios.post(
            `${server}/register`,
            { name, email, password, avatar },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }
        );

        dispatch({ type: "registerSuccess", payload: data.user });
    } catch (error) {
        dispatch({ type: "registerFail", payload: error.response.data.message });
    }
};

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest",
        });

        const { data } = await axios.post(
            `${server}/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        dispatch({
            type: "loginSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "loginFailure",
            payload: error.response.data.message,
        });
    }
};

export const forgotPasswordUser = (email) => async (dispatch) => {
    try {
        dispatch({
            type: "forgotPasswordRequest",
        });

        const { data } = await axios.post(
            `${server}/forgot/password`,
            {
                email,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }
        );

        dispatch({
            type: "forgotPasswordSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "forgotPasswordFail",
            payload: error.response.data.message,
        });
    }
};

export const resetPasswordUser = (token, password) => async (dispatch) => {
    try {
        dispatch({
            type: "resetPasswordRequest",
        });

        const { data } = await axios.put(
            `${server}/password/reset/${token}`,
            {
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }
        );

        dispatch({
            type: "resetPasswordSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "resetPasswordFail",
            payload: error.response.data.message,
        });
    }
};


export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get(`${server}/profile`, {
            withCredentials: true,
        });

        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message,
        });
    }

};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest",
        });

        const { data } = await axios.get(`${server}/logout`, {
            withCredentials: true,
        });

        dispatch({
            type: "logoutSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data.message,
        });
    }
};

export const getContact = (name, email, message) => async (dispatch) => {
    try {
        dispatch({
            type: "contactRequest",
        });

        const { data } = await axios.post(`${server}/contact`, {
            name,
            email,
            message,
        });

        dispatch({
            type: "contactSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "contactFail",
            payload: error.response.data.message,
        });
    }
};
