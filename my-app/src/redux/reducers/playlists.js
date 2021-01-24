import {SAVE_PLAYLIST, DELETE_PLAYLIST, SET_MY_LIB} from "../actions";
import AJAXStorage from "../../AJAXStorage";
let remoteStorage = new AJAXStorage();

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
            remoteStorage.storePlaylist(newState);
            return newState;
        }
        case DELETE_PLAYLIST: {
            let newState={...state};
            newState.listOfPlaylists = newState.listOfPlaylists.filter((_, i) => i !== action.payload);
            let tempo = newState.namesOfPlaylist.lastIndexOf(action.payload[0]); // search per name of playlist where name is first element
            newState.namesOfPlaylist.splice(tempo,1);
            remoteStorage.storePlaylist(newState);
            return newState;
        }
        case SET_MY_LIB: {
            let newState={...state};
            newState.listOfPlaylists = action.payload.listOfPlaylists;
            newState.namesOfPlaylist = action.payload.namesOfPlaylist;
            return newState;
        }
        default:
            return state;
    }
}
export default playlistReducer;