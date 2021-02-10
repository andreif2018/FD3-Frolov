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
var Apple = /** @class */ (function () {
    function Apple(appleName, appleScale) {
        this.appleName = appleName;
        this.appleScale = appleScale;
        this.appleName = appleName;
        this.appleScale = appleScale;
    }
    Apple.prototype.getName = function () {
        return this.appleName;
    };
    Apple.prototype.getScale = function () {
        return this.appleScale;
    };
    Apple.prototype.setAppleColor = function (_appleColor) {
        this.appleColor = _appleColor;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(tomatoName, tomatoScale) {
        this.tomatoName = tomatoName;
        this.tomatoScale = tomatoScale;
        this.tomatoName = tomatoName;
        this.tomatoScale = tomatoScale;
    }
    Tomato.prototype.getName = function () {
        return this.tomatoName;
    };
    Tomato.prototype.getScale = function () {
        return this.tomatoScale;
    };
    Tomato.prototype.setTomatoType = function (_tomatoType) {
        this.isCherry = _tomatoType;
    };
    return Tomato;
}());
var Orange = /** @class */ (function () {
    function Orange(orangeName, orangeScale) {
        this.orangeName = orangeName;
        this.orangeScale = orangeScale;
        this.orangeName = orangeName;
        this.orangeScale = orangeScale;
    }
    Orange.prototype.getName = function () {
        return this.orangeName;
    };
    Orange.prototype.getScale = function () {
        return this.orangeScale;
    };
    return Orange;
}());
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
