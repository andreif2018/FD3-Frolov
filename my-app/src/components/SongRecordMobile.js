import React from 'react';
import PropTypes from 'prop-types';
import './SongRecord.css';
import { connect } from "react-redux";
import {addSong} from "../redux/actions";
import {myEvents} from "./events";

class SongRecordMobile extends React.PureComponent{

    static propTypes = {
        code: PropTypes.number.isRequired,
        song: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        isFiltered: PropTypes.bool.isRequired,
    };

    adding = () => {
        this.props.addSong(this.props);/* method of reducer */
        myEvents.emit('UpdateBadge', null);
    };

    render() {
        let className = (this.props.isFiltered) ? "Filtered" : "Regular";

        return (
            <tr key={this.props.code} className={className}>
                <td className={className}>{this.props.code}</td>
                <td className={className}>{this.props.song}-{this.props.artist}</td>
                <td className={className}>{this.props.album}-{this.props.year}</td>
                <td className={className}>{this.props.genre}</td>
                <td className="Control">
                    <input type="button" className="ActionButton" onClick={this.adding} value="Add"/>
                </td>
            </tr>
        )

    };
}
export default connect(
    null,
    { addSong })(SongRecordMobile);