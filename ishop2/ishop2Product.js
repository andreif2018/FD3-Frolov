var ShopProduct = React.createClass({

    displayName: 'ShopProduct',

    propTypes: {
        productName: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        urlPhoto: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        cbDeleted: React.PropTypes.func.isRequired,
        selectedProductCode: React.PropTypes.number, // может быть null, пока ни один продукт не выбран
    },
    
    productClicked: function() {
        this.props.cbSelected(this.props.code);
    },

    productDeleted: function() {
        this.props.cbSelected(this.props.code);
         if (confirm("Удалить продукт < " + this.props.productName + " >, Вы уверены ?")) this.props.cbDeleted(this.props.code);
    },

    render: function() {
        var clsName = (this.props.code === this.props.selectedProductCode) ? "Selected" : "Product";
        return React.DOM.tr({ key: this.props.code, className: clsName, onClick: this.productClicked },// формирование ячеек таблицы
            React.DOM.td({className: "Name"}, this.props.productName),
            React.DOM.td({className: "Price"}, this.props.price + " $"),
            React.DOM.td({className: "Quantity"}, this.props.quantity + " шт"),
            React.DOM.td({className: "URL"}, this.props.urlPhoto),
            React.DOM.td({}, React.DOM.button({className: "DeleteButton", onClick: this.productDeleted}, "Delete"))
        );
    },
});