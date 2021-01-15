export const ADD_SONG = "ADD_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const RESET_SONG_LIST = "RESET_SONG_LIST";
export const SAVE_PLAYLIST = "SAVE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";

export const addSong = content => ({
    type: ADD_SONG,
    payload: content
});

export const deleteSong = content => ({
    type: DELETE_SONG,
    payload: content
});

export const resetSongList = () => ({
    type: RESET_SONG_LIST
});

export const savePlaylist = (content) => ({
    type: SAVE_PLAYLIST,
    payload: content
});

export const deletePlaylist = content => ({
    type: DELETE_PLAYLIST,
    payload: content
});

