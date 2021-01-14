import React from "react";
import { connect } from "react-redux";
import PlayListItem from "./PlayListItem";
import PropTypes from "prop-types";
import {reset, savePlaylist} from "../redux/actions";
import './Playlist.css';

class intPlaylist extends React.PureComponent {

    static propTypes = {
        list: PropTypes.array,
    };

    state = {
        input: "",
        rate: "",
        nameError: null,
        rateError: null,
        isValidName: false,
        isValidRate: false,
        isValidForm: false,
        nameFieldClassName: "Field",
        rateFieldClassName: "Field",
    };

    updateName = (EO) => {
        let nameValue = EO.target.value;
        this.setState({ input: nameValue });
        if ( nameValue.length > 23) this.setState({nameError: 'field length up to 23 chars', nameFieldClassName: 'InvalidDataField'});
        else if ( nameValue.length === 0) this.setState({nameError: 'field can not be empty', nameFieldClassName: 'InvalidDataField'});
        else this.setState({nameError: null, isValidName: true, nameFieldClassName: 'Field'}, this.validateForm);
    };

    updateRate = (EO) => {
        let rateValue = EO.target.value;
        this.setState({ rate: rateValue });
        if ( rateValue > 5 || rateValue < 1) this.setState({rateError: 'valid range is from 1 to 5', rateFieldClassName: 'InvalidDataField'});
        else this.setState({rateError: null, isValidRate: true, rateFieldClassName: 'Field'}, this.validateForm);
    };

    validateForm = () => {
        var validity = (this.state.nameError === null && this.state.rateError === null &&
            this.state.isValidName === true && this.state.isValidRate === true);// прошли ли валидацию все поля ввода
        this.setState({isValidForm: validity}, this.render);
    };

    save = () => {
        if (!this.state.isValidForm) alert("Please, enter valid values");
        else {
            let data = [this.state.input, this.state.rate];
            this.props.savePlaylist(data);
            this.props.reset();
            this.render();
            alert("Playlist is stored in 'My Library'");
        }

    }


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
                        <tfoot>
                            <tr>
                                <td colSpan="3">Fill form below to save playlist</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="Form">
                        <label htmlFor="pname">Playlist name:</label><br/>
                        <input type="text" className={this.state.nameFieldClassName} name="pname" placeholder="Enter playlist name"
                               onChange={this.updateName} value={this.state.input}/><br/>
                        <span className="Reply">{this.state.nameError}</span><br/>
                        <label htmlFor="rate">Playlist rate:</label><br/>
                        <input type="number" className={this.state.rateFieldClassName} name="rate" placeholder="Enter playlist rate"
                               onChange={this.updateRate} value={this.state.rate}/><br/>
                        <span className="Reply">{this.state.rateError}</span><br/>
                        <input type="button" className="SaveButton" onClick={this.save} value="Save"/>
                    </div>
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

const Playlist = connect(mapStateToProps, {savePlaylist, reset})(intPlaylist);

export default Playlist;
