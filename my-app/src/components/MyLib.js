import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './MyLib.css';
import {deletePlaylist} from "../redux/actions";
import MyLibItem from "./MyLibItem";

class intMyLib extends React.PureComponent {

    static propTypes = {
        myLibrary: PropTypes.array,
    };

    deletePlayList = (index) => {
        this.props.deletePlaylist(index);
    };

    render() {

        var itemsTable = this.props.myLibrary.map((v, index) =>  /* формирование строк таблицы */
            React.createElement(MyLibItem, {
                key: index,
                code: index+1,
                itemName: v,
                order: index,
            }));
        if (this.props.myLibrary && this.props.myLibrary.length) {
            return (
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th className="Order">#</th>
                            <th className="PLayList">PLayList</th>
                            <th className="Control">Control</th>
                        </tr>
                        </thead>
                        <tbody>{itemsTable}</tbody>
                    </table>
                </div>
            );
        }
        else return (
            <div>
                <p>No items, yay!</p>
                <p>Get started with your first playlist</p>
            </div>
            )
    }
}

const mapStateToProps = function (state) {
    return {
        myLibrary: state.playlists.listOfPlaylists,
    };
};

const MyLib = connect(mapStateToProps, {deletePlaylist})(intMyLib);

export default MyLib;

