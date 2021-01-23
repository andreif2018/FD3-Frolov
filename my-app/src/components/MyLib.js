import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './MyLib.css';
import MyLibItem from "./MyLibItem";

class intMyLib extends React.PureComponent {

    static propTypes = {
        myLibrary: PropTypes.array,
    };

    render() {
        var itemsTable = this.props.myLibrary.map((v, index) =>  /* make table rows */
            React.createElement(MyLibItem, {
                key: index,
                code: index+1,
                order: index,
                itemName: Object.values(v)[0], // format of v is: {playlistName: [rate, songs]}
                itemRate: Object.values(v)[1],
                itemContent: Object.values(v)[2],
            }));
        if (this.props.myLibrary && this.props.myLibrary.length) {
            return (
                <div className="MyLib">
                    <table>
                        <thead>
                        <tr>
                            <th className="Order">#</th>
                            <th className="PLayList">PLayList</th>
                            <th className="Rate">Rate</th>
                            <th className="Control">Control</th>
                        </tr>
                        </thead>
                        <tbody>{itemsTable}</tbody>
                    </table>
                </div>
            );
        }
        else return (
            <div className="MyLib">
                <p>No items, yay!</p>
                <p>First create playlist</p>
            </div>
            )
    }
}

const mapStateToProps = function (state) {
    return {
        myLibrary: state.playlists.listOfPlaylists,
    };
};

const MyLib = connect(mapStateToProps)(intMyLib);

export default MyLib;

