class Scales {

    productList:IScalable[] = [];

    add(productItem: IScalable):void {
        this.productList.push(productItem);
    }

    getSumScale():number {
        let result:number = 0;
        this.productList.forEach( (item:IScalable) =>{
            result += item.getScale();
        });
        return result;
    }

    getNameList():string[] {
        let result:string[] = [];
        this.productList.forEach( (item:IScalable) =>{
            result.push(item.getName());
        });
        return result;
    }
}

interface IScalable {

    getScale():number;

    getName():string;
}

class Apple implements IScalable {

    constructor(private readonly appleName:string, private readonly appleScale:number) {
        this.appleName = appleName;
        this.appleScale = appleScale;
    }

    appleColor:string;

    getName():string {
        return this.appleName;
    }

    getScale():number {
        return this.appleScale;
    }

    setAppleColor(_appleColor:string):void {
        this.appleColor = _appleColor;
    }

}

class Tomato implements IScalable {

    isCherry:boolean;

    constructor(private readonly tomatoName:string, private readonly tomatoScale:number) {
        this.tomatoName = tomatoName;
        this.tomatoScale = tomatoScale;
    }

    getName():string {
        return this.tomatoName;
    }

    getScale():number {
        return this.tomatoScale;
    }

    setTomatoType(_tomatoType:boolean):void {
        this.isCherry = _tomatoType;
    }
}
class Orange implements IScalable {

    constructor(private readonly orangeName:string, private readonly orangeScale:number) {
        this.orangeName = orangeName;
        this.orangeScale = orangeScale;
    }

    getName():string {
        return this.orangeName;
    }

    getScale():number {
        return this.orangeScale;
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

