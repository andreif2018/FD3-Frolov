import React from 'react';
import PropTypes from 'prop-types';
import './PlayListItem.css';
import { connect } from "react-redux";
import {deleteSong} from "../redux/actions";

class PlayListItemMobile extends React.PureComponent{

    static propTypes = {
        code: PropTypes.number.isRequired,
        song: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
    };

    delete = () => {
        this.props.deleteSong(this.props.order);/* method of reducer */
    };

    render() {
        return (
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.song}-{this.props.artist}</td>
                <td>{this.props.album}-{this.props.year}</td>
                <td>{this.props.genre}</td>
                <td>
                    <input type="button" className="ActionButton" onClick={this.delete} value="Delete"/>
                </td>
            </tr>
        )

    };
}
export default connect(
    null,
    { deleteSong })(PlayListItemMobile);