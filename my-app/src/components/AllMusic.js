import React from 'react';
import './AllMusic.css';
import items from './songList.json';
import SongRecord from "./SongRecord";
const VISIBILITY_FILTERS = {
    ALL: "all",
    ROCK: "rock",
    JAZZ: "jazz",
    BLUES: "blues",
};

class AllMusic extends React.PureComponent {

    state = {
        filter: VISIBILITY_FILTERS.ALL,
    }

    setFilter = (value) => {
        this.setState({filter: value});
    }

    visibilityFilter = (filter) => {
        switch (filter) {
            case VISIBILITY_FILTERS.BLUES:
                return items.filter(song => song.genre === "Blues");
            case VISIBILITY_FILTERS.ROCK:
                return items.filter(song => song.genre === "Rock");
            case VISIBILITY_FILTERS.JAZZ:
                return items.filter(song => song.genre === "Jazz");
            case VISIBILITY_FILTERS.ALL:
            default:
                return items;
        }
    }

    render() {
        let filteredItems = this.visibilityFilter(this.state.filter);
        let itemsTable = filteredItems.map((v) =>  /* make table rows */
            React.createElement(SongRecord, {
                key: v.code,
                code: v.code,
                song: v.song,
                artist: v.artist,
                album: v.album,
                year: v.year,
                genre: v.genre,
            }));
        return (
            <div>
                <button type="button" autoFocus={true} onClick={() => this.setFilter(VISIBILITY_FILTERS.ALL)}>All</button>
                <button type="button" onClick={() => this.setFilter(VISIBILITY_FILTERS.BLUES)}>Blues</button>
                <button type="button" onClick={() => this.setFilter(VISIBILITY_FILTERS.JAZZ)}>Jazz</button>
                <button type="button" onClick={() => this.setFilter(VISIBILITY_FILTERS.ROCK)}>Rock</button>
                <table>
                    <thead>
                    <tr>
                        <th className="Order">#</th>
                        <th className="Song">Song</th>
                        <th className="Artist">Artist</th>
                        <th className="Album">Album</th>
                        <th className="Year">Year</th>
                        <th className="Genre">Genre</th>
                        <th className="Control">Control</th>
                    </tr>
                    </thead>
                    <tbody>{itemsTable}</tbody>
                </table>
            </div>

        );
    }
}

export default AllMusic;