import axios from 'axios';
import { server } from '../store';

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
