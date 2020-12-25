class Scales {

    productList:Product[] = [];

    add(productItem: Product):void {
        this.productList.push(productItem);
    }

    getSumScale():number {
        let result:number = 0;
        for (let item of this.productList) {
            result += item.getScale();
        }
        return result;
    }

    getNameList():string[] {
        let result:string[] = [];
        for (let item of this.productList) {
            result.push(item.getName());
        }
        return result;
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

    appleColor:string;

    setAppleColor(_appleColor:string):void {
        this.appleColor = _appleColor;
    }
}
class Tomato extends Product {

    isCherry:boolean;

    constructor(productName:string, productScale:number) {
        super(productName, productScale);
        this.isCherry = false;
    }

    setTomatoType(_tomatoType:boolean):void {
        this.isCherry = _tomatoType;
    }
}
class Orange extends Product {

    constructor(productName:string, productScale:number) {
        super(productName, productScale);
    }
}
let scales:Scales = new Scales();
let apple:Apple = new Apple("apple", 3);
apple.setAppleColor("green");
let tomato1:Tomato = new Tomato("tomato1", 1);
tomato1.setTomatoType(true);
let tomato2:Tomato = new Tomato("tomato2", 2);
let orange:Orange = new Orange("orange", 4);
scales.add(apple);
scales.add(tomato1);
scales.add(tomato2);
scales.add(orange);
console.log(scales.getSumScale());
console.log(scales.getNameList());

