var Scales = /** @class */ (function () {
    function Scales(_StorageEngine) {
        this._StorageEngine = _StorageEngine;
        this.productList = null;
        this.productList = _StorageEngine;
    }
    Scales.prototype.getSumScale = function () {
        var result = 0;
        for (var index = 0; index < this.productList.getCount(); index++) {
            result += this.productList.getItem(index).getScale();
        }
        return result;
    };
    Scales.prototype.getNameList = function () {
        var result = [];
        for (var index = 0; index < this.productList.getCount(); index++) {
            result.push(this.productList.getItem(index).getName());
        }
        return result;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.productList = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.productList.push(item);
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.productList.length;
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.productList[index];
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.storageKey = "productList";
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var strData = window.localStorage.getItem(this.storageKey);
        var record = strData ? JSON.parse(strData) : [];
        record.push(item);
        window.localStorage.setItem(this.storageKey, JSON.stringify(record));
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var strData = window.localStorage.getItem(this.storageKey);
        var record = JSON.parse(strData);
        return record.length;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var record;
        var strData = window.localStorage.getItem(this.storageKey);
        record = JSON.parse(strData);
        return new Product(record[index].productName, record[index].productScale);
    };
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(productName, productScale) {
        this.productName = productName;
        this.productScale = productScale;
        this.productName = productName;
        this.productScale = productScale;
    }
    Product.prototype.getScale = function () {
        return this.productScale;
    };
    Product.prototype.getName = function () {
        return this.productName;
    };
    return Product;
}());
var array = new ScalesStorageEngineArray();
var localSt = new ScalesStorageEngineLocalStorage();
var scale = new Scales(array);
var scale2 = new Scales(localSt);
var product1 = new Product("apple", 2);
var product2 = new Product("tomato", 3);
var product3 = new Product("orange", 4);
var product4 = new Product("watermelon", 12);
array.addItem(product1);
array.addItem(product2);
localSt.addItem(product3);
localSt.addItem(product4);
console.log(scale.getSumScale());
console.log(scale.getNameList());
console.log(scale2.getSumScale());
console.log(scale2.getNameList());
