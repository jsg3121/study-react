import * as types from "../actions/ActionTypes";

const initialState = {
    number: 0,
    color: 'black'
};

function counter(state = initialState, action: any) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: state.color
            };
        default:
            return state;
    }
}

export default counter;