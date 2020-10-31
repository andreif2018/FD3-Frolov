var ShopBlock = React.createClass({

    displayName: 'ShopBlock',

    getDefaultProps: function() {
        return { title: "интернет магазин" }
    },

    propTypes: {
        title: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired,
    },

    render: function() {

        var itemsCode = [];
        for ( var a = 0; a < this.props.items.length; a++ ) {
            var item = this.props.items[a];
            var itemCode=
                React.DOM.tr({ key:item.code, className:'ItemCode' },
                    React.DOM.td({className:'Text'}, item.item),
                    React.DOM.td({className:'Price'}, item.price + " $"),
                    React.DOM.td({className:'Count'}, item.count + " шт"),
                    React.DOM.td({className:'URLPhoto'}, React.DOM.img({src: item.urlPhoto}, ),
                ));
            itemsCode.push(itemCode);
        }
        return React.DOM.table( {className:'ShopBlock'},
            React.DOM.thead( {}, React.DOM.tr( {}, React.DOM.th({className:'Title', colSpan: "4"}, this.props.title ))),

            React.DOM.tbody( {className:'Answers'}, itemsCode ),
        );
    },
});