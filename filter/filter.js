var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        title: React.PropTypes.string.isRequired,
        items:React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    },

    getInitialState: function() {
        return {
            processedList: this.props.items,
            orderFlag: false,
            filtered: "",
        };
    },

    isChecked: function(EO) {
        this.setState( {orderFlag: EO.target.checked}, this.stringHandler );
    },

    textChanged: function(EO) {
        console.log('текст ввода изменён - ' + EO.target.value);
        this.setState( {filtered: EO.target.value}, this.stringHandler );
    },

    stringHandler: function() {
        let result = this.props.items.slice();
        if (this.state.filtered !== "") {
            result = result.filter( (v, i) => {
                return v.indexOf(this.state.filtered) !== -1;
            });
        }
        if (this.state.orderFlag) result.sort();
        this.setState( { processedList: result });
    },

    resetForm: function() {
        this.setState( {orderFlag: false, filtered: ""}, this.stringHandler );
    },

    render: function () {

        var itemsCode = [];
        this.state.processedList.forEach( (v, i) => { // формирование строк таблицы
            var element = React.DOM.option( {key: i,className: "Item"}, v);
            itemsCode.push(element);
        });
        return React.DOM.div( {className: "ShopBlock"}, React.DOM.div({className: "Title"}, this.props.title),
                React.DOM.form( {},
                    React.DOM.input({type: "checkbox", onClick: this.isChecked}, ),
                    React.DOM.input({type: "text", onChange: this.textChanged}, ),
                    React.DOM.input({type: "reset", defaultValue: "сброс", onClick: this.resetForm}, ),
                    ),
                React.DOM.br({},),
                React.DOM.select({className: "DropDown", multiple: true, size: 5}, itemsCode ),
            );
    }
});