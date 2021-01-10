import { combineReducers } from 'redux';

import songsReducer from "./songs";

let combinedReducer = combineReducers({
    // редьюсер songsReducer отвечает за раздел state под именем songs
    songs: songsReducer,
    // + другие редьюсеры
});

export default combinedReducer;