// this class will extract the logic for sorting numbers


export class NumbersCollection{
    constructor(public data:number[]){}

    get length():number{
        return this.data.length
    }

    compare(leftIndex:number, rightIndex:number):boolean{ //technically we could have had just one leftIndex and the rightIndex would be left+1 but this is more clear
        return this.data[leftIndex]>this.data[rightIndex]
    }

    swap(leftIndex:number,rightIndex:number):void{
        const leftHand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftHand
    }
}