var ShopBlock = React.createClass({

    displayName: 'ShopBlock',

    getDefaultProps: function() {
        return { title: "интернет магазин музыкальных инструментов" }
    },

    propTypes: {
        title: React.PropTypes.string.isRequired,
        headers: React.PropTypes.array.isRequired,
        items:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                productName: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price: React.PropTypes.number.isRequired,
                urlPhoto:React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number.isRequired,

            })
        ),
    },

    getInitialState: function() {
        return {
            selectedProductCode: null,
            deletedProductCode: null,
        };
    },

    productSelected: function(code) {
        console.log('выбран продукт с кодом '+code);
        this.setState( {selectedProductCode:code} );
    },

    productDeleted: function(code) {
        console.log('удален продукт с кодом '+code);
        this.setState( {deletedProductCode:code} );
    },

    render: function() {

        var headerLine = []; // формирование заголовков таблицы
        this.props.headers.forEach( (element) => {
            var header = React.DOM.th({key:element.code,}, element.header);
            headerLine.push(header);
        } );

        var itemsCode = [];
        this.props.items.forEach( (v) => { // формирование строк таблицы
            var element = React.createElement(ShopProduct, {key: v.code,
            productName: v.productName, code: v.code, price: v.price,
                urlPhoto: v.urlPhoto, quantity: v.quantity,
                cbSelected: this.productSelected,
                selectedProductCode: this.state.selectedProductCode,
                cbDeleted: this.productDeleted,
            } );
            if (v.code !== this.state.deletedProductCode) itemsCode.push(element);
        });

        return React.DOM.table( {className: "ShopBlock"},
            React.DOM.thead( {}, React.DOM.tr( {}, React.DOM.th({className: "Title", colSpan: "5"}, this.props.title )),
                React.DOM.tr( {}, headerLine ),
                ),
            React.DOM.tbody( {}, itemsCode ),
        );
    },
});