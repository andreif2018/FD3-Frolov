interface IStorageEngine {

    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}
class Scales<StorageEngine extends IStorageEngine> {

    productList:StorageEngine = null;

    constructor(public _StorageEngine:StorageEngine) {
        this.productList = _StorageEngine;
    }

    getSumScale():number {
        let result:number = 0;
        for (let index:number = 0; index < this.productList.getCount(); index++) {
            result += this.productList.getItem(index).getScale();
        }
        return result;
    }

    getNameList():string[] {
        let result:string[] = [];
        for (let index:number = 0; index < this.productList.getCount(); index++) {
            result.push(this.productList.getItem(index).getName());
        }
        return result;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {

    productList:Product[] = [];

    addItem(item:Product): void {
        this.productList.push(item);
    }

    getCount(): number {
        return this.productList.length;
    }

    getItem(index:number): Product {
        return this.productList[index];
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    storageKey:string = "productList";

    addItem(item:Product): void {
        let strData = window.localStorage.getItem(this.storageKey);
        let record:Product[] = strData ? JSON.parse(strData) : [ ];
        record.push(item);
        window.localStorage.setItem(this.storageKey, JSON.stringify(record));
    }

    getCount(): number {
        let strData = window.localStorage.getItem(this.storageKey);
        let record:any[] = JSON.parse(strData);
        return record.length;
    }

    getItem(index): Product {
        let record:any[];
        let strData = window.localStorage.getItem(this.storageKey);
        record = JSON.parse(strData);
        return new Product(record[index].productName, record[index].productScale);
    }
}

class Product {

    constructor(private readonly productName:string, private readonly productScale:number) {
        this.productName = productName;
        this.productScale = productScale;
    }

    getScale():number {
        return this.productScale;
    }

    getName():string {
        return this.productName;
    }
}

let array = new ScalesStorageEngineArray();
let localSt = new ScalesStorageEngineLocalStorage();
let scale = new Scales(array);
let scale2 = new Scales(localSt);
let product1 = new Product("apple", 2);
let product2 = new Product("tomato", 3);
let product3 = new Product("orange", 4);
let product4 = new Product("watermelon", 12);
array.addItem(product1);
array.addItem(product2);
localSt.addItem(product3);
localSt.addItem(product4);
console.log(scale.getSumScale());
console.log(scale.getNameList());
console.log(scale2.getSumScale());
console.log(scale2.getNameList());


