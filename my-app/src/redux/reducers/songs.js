import {ADD_SONG, DELETE_SONG} from "../actionTypes";

const initialState = {
    songList: [],
};

function songsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG: {
            console.log('state до обработки редьюсером:',state);
            let newState={...state};
            newState.songList.push(action.payload);
            console.log('state после обработки редьюсером:',newState);
            return newState;
        }
        case DELETE_SONG: {
            console.log('state до обработки редьюсером:',state);
            let newState={...state};
            newState.songList = newState.songList.filter((_, i) => i !== action.payload);
            console.log('state после обработки редьюсером:',newState);
            return newState;
        }
        default:
            return state;
    }
}
export default songsReducer;