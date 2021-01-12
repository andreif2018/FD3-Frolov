import {ADD_SONG, DELETE_SONG} from "../actions";

const initialState = {
    songList: [],
};

function songReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG: {
            let newState={...state};
            newState.songList.push(action.payload);
            return newState;
        }
        case DELETE_SONG: {
            let newState={...state};
            newState.songList = newState.songList.filter((_, i) => i !== action.payload);
            return newState;
        }
        default:
            return state;
    }
}
export default songReducer;