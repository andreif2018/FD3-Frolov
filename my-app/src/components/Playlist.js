import React from "react";
import { connect } from "react-redux";
import PlayListItem from "./PlayListItem";
import PropTypes from "prop-types";
import {savePlaylist} from "../redux/actions";
import './Playlist.css';

class intPlaylist extends React.PureComponent {

    static propTypes = {
        list: PropTypes.array,
    };

    state = {
        input: "",
        nameError: null,
        isValidName: false,
    };

    updateInput = (EO) => {
        let nameValue = EO.target.value;
        this.setState({ input: nameValue });
        if ( nameValue.length > 23) this.setState({nameError: 'field length up to 23 chars'});
        else if ( nameValue.length === 0) this.setState({nameError: 'field can not be empty'});
        else this.setState({nameError: null, isValidName: true});
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
                    <input type="button" className="ActionButton" onClick={this.save} value="Save" disabled={!this.state.isValidName}/><br/>
                    <span className="Reply">{this.state.nameError}</span><br/><br/>
                </div>
            );
        }
        else return (
            <div>
                <p>No items, yay!</p>
                <p>Navigate to "All music" to add song to playlist</p>
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
