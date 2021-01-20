import React from 'react';
import './AllMusic.css';
import items from './songList.json';
import SongRecord from "./SongRecord";
const VISIBILITY_FILTERS = {
    ALL: "All",
    ROCK: "Rock",
    JAZZ: "Jazz",
    BLUES: "Blues",
};

class AllMusic extends React.PureComponent {

    state = {
        filter: VISIBILITY_FILTERS.ALL,
        dataList: items,
    }

    setFilter = (value) => {
        this.setState({filter: value});
        if (value !== VISIBILITY_FILTERS.ALL) {
            let self = this;
            setTimeout( () => {
                self.setState({dataList: self.visibilityFilter(value)});
            }, 2000); // timeout need for animation during 2 seconds, animation in SongRecord.css
        }
        else this.setState({dataList: this.visibilityFilter(value)});
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
        let itemsTable = [];
        this.state.dataList.forEach((v) => {
            let toAnimate;
            if (this.state.filter !== v.genre && this.state.filter !== VISIBILITY_FILTERS.ALL)
                toAnimate = true;
            else toAnimate = false;
            let element = React.createElement(SongRecord, {/* make table rows */
                key: v.code,
                code: v.code,
                song: v.song,
                artist: v.artist,
                album: v.album,
                year: v.year,
                genre: v.genre,
                isFiltered: toAnimate,
            });
            itemsTable.push(element);
        });
        return (
            <div>
                <button type="button" autoFocus={true} onClick={() => this.setFilter(VISIBILITY_FILTERS.ALL)}>All</button>
                <button type="button" onClick={() => this.setFilter(VISIBILITY_FILTERS.BLUES)}>Blues</button>
                <button type="button" onClick={() => this.setFilter(VISIBILITY_FILTERS.JAZZ)}>Jazz</button>
                <button type="button" onClick={() => this.setFilter(VISIBILITY_FILTERS.ROCK)}>Rock</button>
                <table>
                    <thead>
                    <tr>
                        <th className="Order">ID</th>
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