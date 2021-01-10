import React from "react";
import { connect } from "react-redux";
import PlayListItem from "./PlayListItem";
import PropTypes from "prop-types";

class intPlaylist extends React.PureComponent {

    static propTypes = {
        list: PropTypes.array,
    };

    render() {
        var itemsTable = this.props.list.map((v, index) =>  /* формирование строк таблицы */
            React.createElement(PlayListItem, {
                key: index,
                code: index+1,
                song: v.song,
                artist: v.artist,
                album: v.album,
                year: v.year,
                genre: v.genre,
                order: index
            }));
        if (this.props.list && this.props.list.length) {
            return (
                <div>
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
        else return (
            <div><p>No items, yay!</p></div>
            )
    }
}

const mapStateToProps = function (state) {
    return {
        list: state.songs.songList,
    };
};

const Playlist = connect(mapStateToProps)(intPlaylist);

export default Playlist;

