import React from 'react';
import PropTypes from 'prop-types';
import './PlayListItem.css';
import { connect } from "react-redux";
import {deletePlaylist} from "../redux/actions";

class MyLibItem extends React.PureComponent{

    static propTypes = {
        code: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        itemRate: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
    };

    viewPlaylist = () => {
    };

    delete = () => {
        let question = window.confirm("Are you sure to delete playlist " + this.props.itemName + " ?");
        if (question) this.props.deletePlaylist(this.props.order);
    };

    render() {

        return (
            <tr key={this.props.code}>
                <td>{this.props.code}</td>
                <td>{this.props.itemName}</td>
                <td>{this.props.itemRate}</td>
                <td className="MyLibControl">
                    <input type="button" className="ActionButton" onClick={this.viewPlaylist} value="View"/>
                    <input type="button" className="ActionButton" onClick={this.delete} value="Delete"/>
                </td>
            </tr>
        )

    };
}
export default connect(
    null,
    { deletePlaylist })(MyLibItem);