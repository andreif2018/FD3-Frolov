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
import SubPage from "./components/SubPage";
import items from "./components/songList.json";

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    state = {
        badge: 'none',
        width: 0,
        menuState: 'none',
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    addBadge = () => {
        this.setState({badge: "inline"});
    };

    removeBadge = () => {
        this.setState({badge: "none"});
    };

    openCloseBurger = () => {
        if (this.state.menuState === 'none') this.setState({menuState: 'block'});
        else if (this.state.menuState === 'block') this.setState({menuState: 'none'});
    }

    componentDidMount = () => {
        myEvents.addListener('UpdateBadge', this.addBadge);
        myEvents.addListener('RemoveBadge', this.removeBadge);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => {
        myEvents.removeListener('UpdateBadge', this.addBadge);
        myEvents.addListener('RemoveBadge', this.removeBadge);
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    render() {
        let mobileBurgerClassName = (window.innerWidth > 500) ? "BurgerWeb" : "BurgerMobile";
        let appHeaderClassName = (window.innerWidth > 500) ? "App-header" : "AppHeaderMobile";
        return (
            <BrowserRouter>
                <div className="App-logo"><img src={logo} alt={"logo of the app"}/></div>
                <header className={appHeaderClassName}>
                    <NavLink to="/allMusic">All Music</NavLink>
                    <NavLink to="/myLib">My Library</NavLink>
                    <NavLink to="/playList">PlayList
                        <Badge name="badge" label={"new"} style={{borderRadius: '50%', display: this.state.badge}}/>
                    </NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </header>
                <div className={mobileBurgerClassName}>
                    <img className="Burger" onClick={this.openCloseBurger}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAARUlEQVRYR+3U0QkAIAgFQN1/6IL6aQIVOhd4cujLaJ5szg8LEHgFVvFBnmwLEBglUPwEN25UEekBAgT0gBsgQEAP/CmwAdmEEiEL49BKAAAAAElFTkSuQmCC"
                        alt="Открытие меню" title="Открытие меню"/><br/><br/>
                        <div style={{display: this.state.menuState}}>
                            <NavLink to="/allMusic">All Music</NavLink><br/><br/>
                            <NavLink to="/myLib">My Library</NavLink><br/><br/>
                            <NavLink to="/playList">PlayList
                                <Badge name="badge" label={"new"} style={{borderRadius: '50%', display: this.state.badge}}/>
                            </NavLink><br/><br/>
                            <NavLink to="/about">About Us</NavLink>
                        </div>

                </div>
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
                    <Route path="/allMusic1">
                        <SubPage key={1} items={items.slice(0, 20)}/>
                    </Route>
                    <Route path="/allMusic2">
                        <SubPage key={2} items={items.slice(20, 40)}/>
                    </Route>
                    <Route path="/allMusic3">
                        <SubPage key={3} items={items.slice(40)}/>
                    </Route>
                </Switch>
                <div className="App-footer">This is MyApp</div>
            </BrowserRouter>
        );
    }
}
export default App;
