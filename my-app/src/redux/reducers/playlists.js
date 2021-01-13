import {SAVE_PLAYLIST, DELETE_PLAYLIST} from "../actions";

const initialState = {
    listOfPlaylists: [],
};

function playlistReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_PLAYLIST: {
            let newState={...state};
            newState.listOfPlaylists.push(action.payload);
            return newState;
        }
        case DELETE_PLAYLIST: {
            let newState={...state};
            newState.listOfPlaylists = newState.listOfPlaylists.filter((_, i) => i !== action.payload);
            return newState;
        }
        default:
            return state;
    }
}
export default playlistReducer;