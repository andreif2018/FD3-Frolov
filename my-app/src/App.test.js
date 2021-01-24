import renderer from 'react-test-renderer';
import AboutUs from "./components/AboutUs";
import {ADD_SONG, DELETE_PLAYLIST, DELETE_SONG, SAVE_PLAYLIST} from "./redux/actions";
import * as actions from "./redux/actions";
import * as React from "react";
import App from "./App";

test('About Us page is default state for opening app', () => {
  const component = renderer.create(<AboutUs/>);
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot('AboutUsDefault.test.js.snap');
});

/* redux testing start*/
describe('adding Song to playlist', () => {
  it('should create an action to add a song', () => {
    const payload = {"code":1, "song":"Blueberry Hill", "artist":"Louis Armstrong", "album": "Hello, Dolly!", "year":1964, "genre":"Jazz"};
    const expectedAction = {
      type: ADD_SONG,
      payload
    }
    expect(actions.addSong(payload)).toEqual(expectedAction)
  })
});

describe('deletion Song from playlist', () => {
  it('should create an action to delete a song', () => {
    const payload = {"code":2, "song":"One After 909", "artist":"The Beatles", "album": "Let It be", "year":1970, "genre":"Rock"};
    const expectedAction = {
      type: DELETE_SONG,
      payload
    }
    expect(actions.deleteSong(payload)).toEqual(expectedAction)
  })
});

describe('store certain PlayList into MyLib', () => {
  it('should create an action to save playlist', () => {
    const payload = [
      "playlistName",
      "1",
      [
        {
          "code": 1,
          "song": "Blueberry Hill",
          "artist": "Louis Armstrong",
          "album": "Hello, Dolly!",
          "year": 1964,
          "genre": "Jazz",
          "isFiltered": false
        }
      ]
    ];
    const expectedAction = {
      type: SAVE_PLAYLIST,
      payload
    }
    expect(actions.savePlaylist(payload)).toEqual(expectedAction)
  })
});

describe('delete certain PlayList from MyLib', () => {
  it('should create an action to delete playlist', () => {
    const payload = [
      "playlistName",
      "1",
      [
        {
          "code": 1,
          "song": "Blueberry Hill",
          "artist": "Louis Armstrong",
          "album": "Hello, Dolly!",
          "year": 1964,
          "genre": "Jazz",
          "isFiltered": false
        }
      ]
    ];
    const expectedAction = {
      type: DELETE_PLAYLIST,
      payload
    }
    expect(actions.deletePlaylist(payload)).toEqual(expectedAction)
  })
});
/* redux testing end*/