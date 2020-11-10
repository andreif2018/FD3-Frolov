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

    textChanged: function(EO) {
        console.log('текст ввода изменён - ' + EO.target.value);
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

        return React.DOM.div( {className: "ShopBlock"}, React.DOM.div({className: "Title"}, this.props.title),
                React.DOM.form( {},
                    React.DOM.input({type: "checkbox", defaultChecked: false}, ),
                    React.DOM.input({type: "text", onChange: this.textChanged}, ),
                    React.DOM.input({type: "reset", defaultValue: "сброс"}, ),
                    ),
                React.DOM.br({},),
                React.DOM.select({className: "DropDown", multiple: true, size: 5}, itemsCode ),
            );
    }
});