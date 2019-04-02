import * as authConstants from '../constants';

const initialState = {
    loading: false
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.AUTH_START:
            return {
                ...state
            }
        case authConstants.AUTH_SUCCESS:
            return {
                ...state
            }
        case authConstants.AUTH_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}

export default authReducers;