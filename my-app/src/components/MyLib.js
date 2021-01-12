import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class intMyLib extends React.PureComponent {

    static propTypes = {
        myLibrary: PropTypes.array,
    };

    deletePlayList = () => {
        this.props.deletePlaylist(this.props);
    };

    render() {

        if (this.props.myLibrary && this.props.myLibrary.length) {
            var itemsTable = this.props.myLibrary.map((v, index) =>
                <li key={index}>
                    {v}
                    <input type="button" className="ActionButton" onClick={this.deletePlayList} value="Delete"/>
                </li>);
            return (
                <div>
                    <ul>{itemsTable}</ul>
                </div>
            );
        }
        else return (
            <div>
                <p>No items, yay!</p>
                <p>First, create your playlist</p>
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

