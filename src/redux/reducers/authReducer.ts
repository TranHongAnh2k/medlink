import { AnyAction } from "redux";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType";

interface typeaction {
    type: string,
    payload: object
}
interface typestate {
    accessToken: string,
    user: string,
    loading: boolean,
}

const initialState: typestate = {
    accessToken: null,
    user: null,
    loading: false,
}

const authReducer = (state = initialState, action: AnyAction) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload,
                loading: false,
            }

        case LOGIN_FAIL:
            return {
                ...state,
                accessToken: null,
                loading: false,
                error: payload,
                user: null,
            }

        case LOG_OUT:
            return {
                ...state,
                accessToken: null,
                user: null,
            }
        case LOAD_PROFILE:
            return {
                ...state,
                user: payload,
            }
        default:
            return state
    }
}

export default authReducer;