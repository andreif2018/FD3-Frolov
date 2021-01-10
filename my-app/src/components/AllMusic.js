import React from 'react';
import './AllMusic.css';
import items from './songList.json';
import SongRecord from "./SongRecord";

class AllMusic extends React.PureComponent {

    render() {
        var itemsTable = items.map((v) =>  /* формирование строк таблицы */
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
        );
    }
}

export default AllMusic;