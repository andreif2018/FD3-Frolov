import React from 'react';
import './AllMusic.css';
import SongRecord from "./SongRecord";
import SongRecordMobile from "./SongRecordMobile";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
const VISIBILITY_FILTERS = {
    ALL: "All",
    ROCK: "Rock",
    JAZZ: "Jazz",
    BLUES: "Blues",
};

class SubPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    static propTypes = {
        items: PropTypes.array,
    };

    state = {
        filter: VISIBILITY_FILTERS.ALL,
        dataList: this.props.items,
        width: 0,
        allButtonState: "Selected",
        bluesButtonState: "NotSelected",
        jazzButtonState: "NotSelected",
        rockButtonState: "NotSelected",
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    setFilter = (value) => {
        this.setState({filter: value}); // impact on animation
        if (value === this.state.filter) return;
        if (value !== VISIBILITY_FILTERS.ALL) {
            let self = this;
            setTimeout( () => {
                self.visibilityFilter(value);
            }, 1000); // timeout need for animation during 2 seconds, animation in SongRecord.css
        }
        else this.visibilityFilter(value);
    }

    visibilityFilter = (filter) => {
        switch (filter) {
            case VISIBILITY_FILTERS.BLUES:
                this.setState({
                    allButtonState: "NotSelected",
                    bluesButtonState: "Selected",
                    jazzButtonState: "NotSelected",
                    rockButtonState: "NotSelected",
                    dataList: this.props.items.filter(song => song.genre === "Blues"),
                });
                return;
            case VISIBILITY_FILTERS.ROCK:
                this.setState({
                    allButtonState: "NotSelected",
                    bluesButtonState: "NotSelected",
                    jazzButtonState: "NotSelected",
                    rockButtonState: "Selected",
                    dataList: this.props.items.filter(song => song.genre === "Rock"),
                });
                return;
            case VISIBILITY_FILTERS.JAZZ:
                this.setState({
                    allButtonState: "NotSelected",
                    bluesButtonState: "NotSelected",
                    jazzButtonState: "Selected",
                    rockButtonState: "NotSelected",
                    dataList: this.props.items.filter(song => song.genre === "Jazz"),
                });
                return;
            case VISIBILITY_FILTERS.ALL:
            default:
                this.setState({
                    allButtonState: "Selected",
                    bluesButtonState: "NotSelected",
                    jazzButtonState: "NotSelected",
                    rockButtonState: "NotSelected",
                    dataList: this.props.items,
                });
                return;
        }
    }

    render() {
        let itemsTable = [];
        this.state.dataList.forEach((v) => {
            let toAnimate;
            if (this.state.filter !== v.genre && this.state.filter !== VISIBILITY_FILTERS.ALL)
                toAnimate = true;
            else toAnimate = false;
            let element = React.createElement(SongRecord, {/* make table rows */
                key: v.code,
                code: v.code,
                song: v.song,
                artist: v.artist,
                album: v.album,
                year: v.year,
                genre: v.genre,
                isFiltered: toAnimate,
            });
            itemsTable.push(element);
        });
        let itemsTableForMobile = [];
        this.state.dataList.forEach((v) => {
            let toAnimate;
            if (this.state.filter !== v.genre && this.state.filter !== VISIBILITY_FILTERS.ALL)
                toAnimate = true;
            else toAnimate = false;
            let element = React.createElement(SongRecordMobile, {/* make table rows */
                key: v.code,
                code: v.code,
                song: v.song,
                artist: v.artist,
                album: v.album,
                year: v.year,
                genre: v.genre,
                isFiltered: toAnimate,
            });
            itemsTableForMobile.push(element);
        });
        if (window.innerWidth > 500) {
            return (
                <div className="AllMusic">
                    <div className="FilterSection">
                        <button className={this.state.allButtonState} autoFocus={true} onClick={() => this.setFilter(VISIBILITY_FILTERS.ALL)}>All</button>
                        <button className={this.state.bluesButtonState} onClick={() => this.setFilter(VISIBILITY_FILTERS.BLUES)}>Blues</button>
                        <button className={this.state.jazzButtonState} onClick={() => this.setFilter(VISIBILITY_FILTERS.JAZZ)}>Jazz</button>
                        <button className={this.state.rockButtonState} onClick={() => this.setFilter(VISIBILITY_FILTERS.ROCK)}>Rock</button>
                    </div>
                    <div className="SubPageSection">
                        <NavLink to="/allMusic1"><button className='SubPageButton'>1..20</button></NavLink>
                        <NavLink to="/allMusic2"><button className='SubPageButton'>21..40</button></NavLink>
                        <NavLink to="/allMusic3"><button className='SubPageButton'>41..</button></NavLink>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th className="Order">ID</th>
                            <th className="Song">Song</th>
                            <th className="Artist">Artist</th>
                            <th className="Album">Album</th>
                            <th className="Year">Year</th>
                            <th className="Genre">Genre</th>
                            <th className="Control">Control</th>
                        </tr>
                        </thead>
                        <tbody>{itemsTable}</tbody>
                    </table>
                    <div className="SubPageSection">
                        <NavLink to="/allMusic1"><button className='SubPageButton'>1..20</button></NavLink>
                        <NavLink to="/allMusic2"><button className='SubPageButton'>21..40</button></NavLink>
                        <NavLink to="/allMusic3"><button className='SubPageButton'>41..</button></NavLink>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="AllMusic">
                    <div className="FilterSection">
                        <button className={this.state.allButtonState} autoFocus={true} onClick={() => this.setFilter(VISIBILITY_FILTERS.ALL)}>All</button>
                        <button className={this.state.bluesButtonState} onClick={() => this.setFilter(VISIBILITY_FILTERS.BLUES)}>Blues</button>
                        <button className={this.state.jazzButtonState} onClick={() => this.setFilter(VISIBILITY_FILTERS.JAZZ)}>Jazz</button>
                        <button className={this.state.rockButtonState} onClick={() => this.setFilter(VISIBILITY_FILTERS.ROCK)}>Rock</button>
                    </div>
                    <div className="SubPageSection">
                        <NavLink to="/allMusic1"><button className='SubPageButton'>1..20</button></NavLink>
                        <NavLink to="/allMusic2"><button className='SubPageButton'>21..40</button></NavLink>
                        <NavLink to="/allMusic3"><button className='SubPageButton'>41..</button></NavLink>
                    </div>
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
                        <tbody>{itemsTableForMobile}</tbody>
                    </table>
                    <div className="SubPageSection">
                        <NavLink to="/allMusic1"><button className='SubPageButton'>1..20</button></NavLink>
                        <NavLink to="/allMusic2"><button className='SubPageButton'>21..40</button></NavLink>
                        <NavLink to="/allMusic3"><button className='SubPageButton'>41..</button></NavLink>
                    </div>
                </div>
            );
        }
    }
}

export default SubPage;