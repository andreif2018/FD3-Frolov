import React from "react";
import { connect } from "react-redux";
import PlayListItem from "./PlayListItem";
import PropTypes from "prop-types";
import {savePlaylist} from "../redux/actions";
import './PlayListItem.css';

class intPlaylist extends React.PureComponent {

    static propTypes = {
        list: PropTypes.array,
    };

    state = { input: "" };

    updateInput = (e) => {
        let input = e.target.value;
        this.setState({ input });
    };

    save = () => {
        this.props.savePlaylist(this.state.input);
        this.setState({ input: "" });
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
                    <input type="text" className="Field" placeholder="Enter playlist name"
                           onChange={this.updateInput} value={this.state.input}/>
                    <input type="button" className="ActionButton" onClick={this.save} value="Save"/>
                </div>
            );
        }
        else return (
            <div>
                <p>No items, yay!</p>
                <p>Navigate to "All music" to add your first song to playlist</p>
            </div>
            )
    }
}

const mapStateToProps = function (state) {
    return {
        list: state.songs.songList,
    };
};

const Playlist = connect(mapStateToProps, {savePlaylist})(intPlaylist);

export default Playlist;
