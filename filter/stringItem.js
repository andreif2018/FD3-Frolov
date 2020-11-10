var StringItem = React.createClass({

    displayName: 'StringItem',

    propTypes: {
        stringValue: React.PropTypes.string,
        code: React.PropTypes.number,
    },

    render: function () {
        return React.DOM.option( {className: "Item"}, this.props.stringValue);
    }
});