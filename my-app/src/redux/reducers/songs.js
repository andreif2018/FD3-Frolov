import {ADD_SONG, DELETE_SONG, RESET} from "../actions";
import {myEvents} from "../../components/events";

const initialState = {
    songList: [],
};

function songReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG: {
            let newState={...state};
            newState.songList.push(action.payload);
            return newState;
        }
        case DELETE_SONG: {
            let newState={...state};
            newState.songList = newState.songList.filter((_, i) => i !== action.payload);
            if (newState.songList.length === 0) myEvents.emit('RemoveBadge', null);
            return newState;
        }
        case RESET: {
            let newState={...state};
            newState.songList = [];
            if (newState.songList.length === 0) myEvents.emit('RemoveBadge', null);
            return newState;
        }
        default:
            return state;
    }
}
export default songReducer;