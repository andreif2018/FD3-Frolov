import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        const regexp = /<br\s*\/?>/g;
        var wordList = this.props.text.split(regexp);
        var show = [];
        wordList.forEach( (item, index) => {
            show.push(item);
            if (index < wordList.length - 1) show.push(<br/>);
        });
        if (show.length ===0) return;
        return <div>{show}</div>;
    }
}
export default BR2JSX;