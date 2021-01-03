import './App.css';
import logo from "./logo.png";
import AboutUsPage from "./components/AboutUsPage";
import {
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import AllMusicPage from "./components/AllMusicPage";

function App() {
  return (
        <div>
          <img src={logo} alt={"logo of the app"}/>
          <header className="App-header">
              <NavLink to="/allMusic">All Music</NavLink>
              <NavLink to="/myLib">My Library</NavLink>
              <NavLink to="/myList">PlayList</NavLink>
              <NavLink to="/about">About Us</NavLink>
          </header>
          <Switch>
              <Route exact path="/"><Redirect to="/about" /></Route>
              <Route path="/allMusic"><AllMusicPage/></Route>
              <Route path="/myLib"></Route>
              <Route path="/playList"></Route>
              <Route path="/about"><AboutUsPage/></Route>
          </Switch>
          <div className="App-footer">This is MyApp</div>
        </div>
  );
}

export default App;