import {ADD_SONG, DELETE_SONG, SELECT_SONG, SET_FILTER} from "./actionTypes";

export const addSong = content => ({
    type: ADD_SONG,
    payload: content
});

export const selectSong = id => ({
    type: SELECT_SONG,
    payload: { id }
});

export const deleteSong = content => ({
    type: DELETE_SONG,
    payload: content
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
