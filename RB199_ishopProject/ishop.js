var ShopBlock = React.createClass({

    displayName: 'ShopBlock',

    getDefaultProps: function() {
        return { title: "интернет магазин музыкальных инструментов" }
    },

    propTypes: {
        title: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired,
    },

    render: function() {

        var itemsCode = [];
        this.props.items.forEach( (item) => {
            var itemCode =
                React.DOM.tr({ key:item.code, className: 'ItemCode' },
                    React.DOM.td({className: 'Text'}, item.item),
                    React.DOM.td({className: 'Price'}, item.price + " $"),
                    React.DOM.td({className: 'Quantity'}, item.quantity + " шт"),
                    React.DOM.td({className: 'URLPhoto'}, React.DOM.img({src: item.urlPhoto}, ),
                    ));
            itemsCode.push(itemCode);
        })

        return React.DOM.table( {className: 'ShopBlock'},
            React.DOM.thead( {}, React.DOM.tr( {}, React.DOM.th({className: 'Title', colSpan: "4"}, this.props.title ))),

            React.DOM.tbody( {className: 'Answers'}, itemsCode ),
        );
    },
});