import {SAVE_PLAYLIST, DELETE_PLAYLIST} from "../actions";

const initialState = {
    listOfPlaylists: [],
    namesOfPlaylist: [],
};


function playlistReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_PLAYLIST: {
            if (state.namesOfPlaylist.includes(Object.values(action.payload)[0])) alert("Playlist with such name already exists");
            let newState={...state};
            newState.listOfPlaylists.push(action.payload);
            newState.namesOfPlaylist.push(Object.values(action.payload)[0]);
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