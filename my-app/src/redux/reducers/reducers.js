import {combineReducers} from 'redux';
import songReducer from "./songs";
import playlistReducer from "./playlists";

// // Load initial state function
// const loadStore = () => {
//     return Promise(resolve => {
//         fetch('http://localhost:3001/posts/2')
//             .then(response => response.json())
//             .then(resolve);
//     });
// }
let combinedReducer = combineReducers({
    songs: songReducer,
    playlists: playlistReducer,
});
export default combinedReducer;