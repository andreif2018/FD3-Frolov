import React from 'react';
import './AboutUs.css';

class AboutUs extends React.PureComponent {

    render() {
        return (
            <div className="AboutUs">
                <p>This app allows you to create your own playlists.</p>
                <p>Start to add items to playlist on "All music" page.</p>
                <p>Then navigate to "Playlist" page to save created playlist</p>
                <p>Also, You will be able to filter your songs by genre.</p>
            </div>
        );
    }
}

export default AboutUs;