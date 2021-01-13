import './App.css';
import logo from "./logo.png";
import AboutUs from "./components/AboutUs";
import {
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import AllMusic from "./components/AllMusic";
import Playlist from "./components/Playlist";
import { BrowserRouter } from "react-router-dom";
import MyLib from "./components/MyLib";
import Badge from 'react-simple-badges'
import * as React from "react";
import {myEvents} from "./components/events";

class App extends React.PureComponent {

    state = {
        badge: 'none',
    }

    addBadge = () => {
        this.setState({badge: "inline"});
    };

    removeBadge = () => {
        this.setState({badge: "none"});
    };

    componentDidMount = () => {
        myEvents.addListener('UpdateBadge', this.addBadge);
        myEvents.addListener('RemoveBadge', this.removeBadge);
    };

    componentWillUnmount = () => {
        myEvents.removeListener('UpdateBadge', this.addBadge);
        myEvents.addListener('RemoveBadge', this.removeBadge);
    };

    render() {
        return (
            <BrowserRouter>
                <img src={logo} alt={"logo of the app"}/>
                <header className="App-header">
                    <NavLink to="/allMusic">All Music</NavLink>
                    <NavLink to="/myLib">My Library</NavLink>
                    <NavLink to="/playList">PlayList<Badge name="badge" label={"new"}
                                                           style={{borderRadius: '50%', display: this.state.badge}}/></NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/about"/>
                    </Route>
                    <Route path="/allMusic">
                        <AllMusic/>
                    </Route>
                    <Route path="/myLib">
                        <MyLib/>
                    </Route>
                    <Route path="/playList">
                        <Playlist/>
                    </Route>
                    <Route path="/about">
                        <AboutUs/>
                    </Route>
                </Switch>
                <div className="App-footer">This is MyApp</div>
            </BrowserRouter>
        );
    }
}
export default App;
