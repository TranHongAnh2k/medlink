import authApi from "../../api/authApi";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType"

interface typeValue {
    login_id: string,
    password: string
}

export const login = (value: typeValue) => async dispatch => {

    try {
        dispatch({
            type: LOGIN_REQUEST,
        })

        const {data} = await authApi.login(value)
        const { access_token, account } = data
        const {full_name} = account


        dispatch({
            type: LOGIN_SUCCESS,
            payload: access_token
        })

        dispatch({
            type: LOAD_PROFILE,
            payload: full_name
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}

export const logout = () => async dispatch => {
    dispatch({
        type: LOG_OUT
    })
}