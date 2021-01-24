import {SAVE_PLAYLIST, DELETE_PLAYLIST} from "../actions";
import AJAXStorage from "../../AJAXStorage";
let remoteStorage = new AJAXStorage();

const initialState = {
    listOfPlaylists: remoteStorage.restoreLib().listOfPlaylists,
    namesOfPlaylist: remoteStorage.restoreLib().namesOfPlaylist,
};


function playlistReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_PLAYLIST: {
            if (state.namesOfPlaylist.includes(Object.values(action.payload)[0])) alert("Playlist with such name already exists");
            let newState={...state};
            newState.listOfPlaylists.push(action.payload);
            newState.namesOfPlaylist.push(Object.values(action.payload)[0]);
            remoteStorage.storePlaylist(newState);
            return newState;
        }
        case DELETE_PLAYLIST: {
            let newState={...state};
            newState.listOfPlaylists = newState.listOfPlaylists.filter((_, i) => i !== action.payload);
            remoteStorage.storePlaylist(newState);
            return newState;
        }
        default:
            return state;
    }
}
export default playlistReducer;