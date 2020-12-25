class Scales {

    productNameList:string[] = [];
    productScaleList:number[] = [];

    add(productName:string, productScale:number):void {
        this.productNameList.push(productName);
        this.productScaleList.push(productScale);
    }

    getSumScale():number {
        let result:number = 0;
        for (let item of this.productScaleList) {
            result += item;
        }
        return result;
    }

    getNameList():string[] {
        return this.productNameList;
    }
}

class Product {

    productName:string;
    productScale:number;

    constructor(_productName:string, _productScale:number) {
        this.productName = _productName;
        this.productScale = _productScale;
    }

    getScale():number {
        return this.productScale;
    }

    getName():string {
        return this.productName;
    }
}

class Apple extends Product {
    constructor(productName:string, productScale:number) {
        super(productName, productScale);
    }
}
class Tomato extends Product {
    constructor(productName:string, productScale:number) {
        super(productName, productScale);
    }
}
class Orange extends Product {
    constructor(productName:string, productScale:number) {
        super(productName, productScale);
    }
}
let scales:Scales = new Scales();
let apple:Apple = new Apple("apple", 3);
let tomato:Tomato = new Tomato("tomato", 2);
let orange:Orange = new Orange("orange", 4);
scales.add(apple.getName(), apple.getScale());
scales.add(tomato.getName(), tomato.getScale());
scales.add(orange.getName(), orange.getScale());
console.log(scales.getSumScale());
console.log(scales.getNameList());

