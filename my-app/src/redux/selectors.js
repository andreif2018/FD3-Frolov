import { VISIBILITY_FILTERS } from "../constants";

export const getSongsState = store => store.songs;

export const getSongList = store =>
    getSongsState(store) ? getSongsState(store) : [];

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getSongs = store =>
    getSongList(store);

export const getSongsByVisibilityFilter = (store, visibilityFilter) => {
    const allSongs = getSongs(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.BLUES:
            return allSongs.filter(song => song.genre === "Blues");
        case VISIBILITY_FILTERS.ROCK:
            return allSongs.filter(song => song.genre === "Rock");
        case VISIBILITY_FILTERS.JAZZ:
            return allSongs.filter(song => song.genre === "Jazz");
        case VISIBILITY_FILTERS.ALL:
        default:
            return allSongs;
    }
};
