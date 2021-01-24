import React from "react";
import { connect } from "react-redux";
import PlayListItem from "./PlayListItem";
import PropTypes from "prop-types";
import {resetPlaylist, savePlaylist, setPlaylist} from "../redux/actions";
import './Playlist.css';
import PlayListItemMobile from "./PlayListItemMobile";

class intPlaylist extends React.PureComponent {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

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
        width: 0,
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateWindowDimensions(); // for web-mobile device detection
        window.addEventListener('resize', this.updateWindowDimensions);// for web-mobile device detection
        fetch("http://localhost:3001/posts/2") // ajax request
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.setPlaylist(result.songList);
                },
                (error) => {
                    console.log(error);
                    alert("Sorry, there is an error in loading data. Try again later");
                }
            );
    }

    updateName = (EO) => { /* input value into the field, validate it and invoke validate whole form*/
        let nameValue = EO.target.value;
        this.setState({ input: nameValue });
        if ( nameValue.length > 23)
            this.setState({nameError: 'field length up to 23 chars', nameFieldClassName: 'InvalidDataField'}, this.validateForm);
        else if ( nameValue.length === 0)
            this.setState({nameError: 'field can not be empty', nameFieldClassName: 'InvalidDataField'}, this.validateForm);
        else this.setState({nameError: null, isValidName: true, nameFieldClassName: 'Field'}, this.validateForm);
    };

    updateRate = (EO) => {/* input value into the field, validate it and invoke validate whole form*/
        let rateValue = EO.target.value;
        this.setState({ rate: rateValue });
        if ( rateValue > 5 || rateValue < 1)
            this.setState({rateError: 'valid range is from 1 to 5', rateFieldClassName: 'InvalidDataField'}, this.validateForm);
        else this.setState({rateError: null, isValidRate: true, rateFieldClassName: 'Field'}, this.validateForm);
    };

    validateForm = () => {
        var validity = (this.state.nameError === null && this.state.rateError === null &&
            this.state.isValidName === true && this.state.isValidRate === true);/* validate all form's fields */
        this.setState({isValidForm: validity}, this.render);
    };

    save = () => {/* save form*/
        if (!this.state.isValidForm) alert("Please, enter valid values for form's fields");
        else {
            let data = [this.state.input, this.state.rate, this.props.list];
            this.props.savePlaylist(data);/* method of reducer*/
            alert("Playlist " + this.state.input + " is stored in 'My Library'");
            this.props.resetPlaylist();/* method of reducer*/
            this.setState({input: "", rate: ""});
        }

    }


    render() {
        var itemsTable = this.props.list.map((v, index) =>  /* makes table rows */
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
        var itemsTableMobile = this.props.list.map((v, index) =>  /* makes table rows */
            React.createElement(PlayListItemMobile, {
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
            if (window.innerWidth > 500) {
                return (
                    <div className="Playlist">
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
                                   onChange={this.updateName} value={this.state.input}/>
                            <span className="Reply">{this.state.nameError}</span><br/>
                            <label htmlFor="rate">Playlist rate:</label><br/>
                            <input type="number" className={this.state.rateFieldClassName} name="rate" placeholder="Enter playlist rate"
                                   onChange={this.updateRate} value={this.state.rate}/>
                            <span className="Reply">{this.state.rateError}</span><br/>
                            <input type="button" className="SaveButton" onClick={this.save} value="Save" />
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="Playlist">
                        <table>
                            <thead>
                            <tr>
                                <th className="Order">ID</th>
                                <th className="Song">Song</th>
                                <th className="Album">Album</th>
                                <th className="Genre">Genre</th>
                                <th className="Control">Control</th>
                            </tr>
                            </thead>
                            <tbody>{itemsTableMobile}</tbody>
                        </table>
                        <div className="Form">
                            <label htmlFor="pname">Playlist name:</label><br/>
                            <input type="text" className={this.state.nameFieldClassName} name="pname" placeholder="Enter playlist name"
                                   onChange={this.updateName} value={this.state.input}/>
                            <span className="Reply">{this.state.nameError}</span><br/>
                            <label htmlFor="rate">Playlist rate:</label><br/>
                            <input type="number" className={this.state.rateFieldClassName} name="rate" placeholder="Enter playlist rate"
                                   onChange={this.updateRate} value={this.state.rate}/>
                            <span className="Reply">{this.state.rateError}</span><br/>
                            <input type="button" className="SaveButton" onClick={this.save} value="Save" />
                        </div>
                    </div>
                );
            }

        }
        else return (
            <div className="Playlist">
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

const Playlist = connect(mapStateToProps, {savePlaylist, resetPlaylist, setPlaylist})(intPlaylist);

export default Playlist;
