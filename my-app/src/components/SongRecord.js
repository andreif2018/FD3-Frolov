import React from 'react';
import PropTypes from 'prop-types';
import './SongRecord.css';

class SongRecord extends React.PureComponent{

    static propTypes = {
        code: PropTypes.number.isRequired,
        song: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
    };

    songAdding = () => {
        console.log(this.props.code);
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
                    <input type="button" className="AddButton" onClick={this.songAdding} value="Add"/>
                </td>
            </tr>
        )

    };
}
export default SongRecord;