var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productList = [];
    }
    Scales.prototype.add = function (productItem) {
        this.productList.push(productItem);
    };
    Scales.prototype.getSumScale = function () {
        var result = 0;
        this.productList.forEach(function (item) {
            result += item.getScale();
        });
        return result;
    };
    Scales.prototype.getNameList = function () {
        var result = [];
        this.productList.forEach(function (item) {
            result.push(item.getName());
        });
        return result;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_productName, _productScale) {
        this.productName = _productName;
        this.productScale = _productScale;
    }
    Product.prototype.getScale = function () {
        return this.productScale;
    };
    Product.prototype.getName = function () {
        return this.productName;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(productName, productScale) {
        return _super.call(this, productName, productScale) || this;
    }
    Apple.prototype.setAppleColor = function (_appleColor) {
        this.appleColor = _appleColor;
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(productName, productScale) {
        var _this = _super.call(this, productName, productScale) || this;
        _this.isCherry = false;
        return _this;
    }
    Tomato.prototype.setTomatoType = function (_tomatoType) {
        this.isCherry = _tomatoType;
    };
    return Tomato;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(productName, productScale) {
        return _super.call(this, productName, productScale) || this;
    }
    return Orange;
}(Product));
var scales = new Scales();
var apple = new Apple("apple", 3);
apple.setAppleColor("green");
var tomato1 = new Tomato("tomato1", 1);
tomato1.setTomatoType(true);
var tomato2 = new Tomato("tomato2", 2);
var orange = new Orange("orange", 4);
scales.add(apple);
scales.add(tomato1);
scales.add(tomato2);
scales.add(orange);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map