import {SAVE_PLAYLIST, DELETE_PLAYLIST} from "../actions";

const initialState = {
    listOfPlaylists: [],
};

function playlistReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_PLAYLIST: {
            console.log('state до обработки редьюсером:',state);
            let newState={...state};
            newState.listOfPlaylists.push(action.payload);
            console.log('state после обработки редьюсером:',newState);
            return newState;
        }
        case DELETE_PLAYLIST: {
            console.log('state до обработки редьюсером:',state);
            let newState={...state};
            newState.listOfPlaylists = newState.listOfPlaylists.filter((_, i) => i !== action.payload);
            console.log('state после обработки редьюсером:',newState);
            return newState;
        }
        default:
            return state;
    }
}
export default playlistReducer;