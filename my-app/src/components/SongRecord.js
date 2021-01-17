import React from 'react';
import PropTypes from 'prop-types';
import './SongRecord.css';
import { connect } from "react-redux";
import {addSong} from "../redux/actions";
import {myEvents} from "./events";

class SongRecord extends React.PureComponent{

    static propTypes = {
        code: PropTypes.number.isRequired,
        song: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
    };

    adding = () => {
        this.props.addSong(this.props);/* method of reducer */
        myEvents.emit('UpdateBadge', null);
    };

    render() {

        return (
            <tr key={this.props.code}>
                <td>{this.props.code}</td>
                <td>{this.props.song}</td>
                <td>{this.props.artist}</td>
                <td>{this.props.album}</td>
                <td>{this.props.year}</td>
                <td>{this.props.genre}</td>
                <td className="Control">
                    <input type="button" className="ActionButton" onClick={this.adding} value="Add"/>
                </td>
            </tr>
        )

    };
}
export default connect(
    null,
    { addSong })(SongRecord);