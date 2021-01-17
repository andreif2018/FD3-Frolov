import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './PlayListItem.css';
import { connect } from "react-redux";
import {deletePlaylist} from "../redux/actions";

class MyLibItem extends React.PureComponent{

    static propTypes = {
        code: PropTypes.number.isRequired,
        order: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        itemRate: PropTypes.string.isRequired,
        itemContent: PropTypes.array.isRequired,
    };

    state = {
        showContent: 'none',
        isViewed: false,
    }

    viewPlaylist = () => {
        this.setState( {showContent: 'inline-block', isViewed: true});
    };

    delete = () => {
        let question = window.confirm("Are you sure to delete playlist " + this.props.itemName + " ?");
        if (question) this.props.deletePlaylist(this.props.order);/* method of reducer */
    };

    close = () => {
        this.setState( {showContent: 'none', isViewed: false});
    }

    render() {

        var itemsTable = this.props.itemContent.map((v, index) =>  /* формирование строк таблицы */
            <li key={index}>{v.song}, {v.artist}</li>
            );

        return (
            <Fragment>
                <tr key={this.props.code}>
                    <td>{this.props.code}</td>
                    <td>{this.props.itemName}</td>
                    <td>{this.props.itemRate}</td>
                    <td className="MyLibControl">
                        <input type="button" className="ActionButton" onClick={this.viewPlaylist} value="View"
                        disabled={this.state.isViewed}/>
                        <input type="button" className="ActionButton" onClick={this.delete} value="Delete"/>
                    </td>
                </tr>
                <tr style={{display: this.state.showContent}}>
                    <td>
                        <ol>{itemsTable}</ol>
                        <input type="button" className="ActionButton" onClick={this.close} value="Close"/>
                    </td>
                </tr>

            </Fragment>

        )

    };
}
export default connect(
    null,
    { deletePlaylist })(MyLibItem);