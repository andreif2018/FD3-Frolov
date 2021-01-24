import {combineReducers} from 'redux';
import songReducer from "./songs";
import playlistReducer from "./playlists";

let combinedReducer = combineReducers({
    songs: songReducer,
    playlists: playlistReducer,
});
export default combinedReducer;