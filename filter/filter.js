var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        title: React.PropTypes.string.isRequired,
        items:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                stringValue: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        ),
    },

    getInitialState: function() {
        return {
            list: this.props.items,
        };
    },

    render: function () {

        var itemsCode = [];
        this.state.list.forEach( (v) => { // формирование строк таблицы
            var element = React.createElement(StringItem, {
                key: v.code,
                stringValue: v.stringValue,
                code: v.code,
            } );
            itemsCode.push(element);
        });
        return React.DOM.div({className: "ShopBlock"}, React.DOM.div({className: "Title"}, this.props.title),
                React.DOM.input({type:"checkbox"},),
                React.DOM.input({type:"text"},),
                React.DOM.button({},"сброс"),
                React.DOM.br({},),
                React.DOM.select({className: "DropDown", defaultValue: ""}, React.DOM.option( {className: "Item",  disabled: true}, ), itemsCode ), // first option tag is empty to be default
            );
    }
});