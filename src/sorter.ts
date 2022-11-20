import { NumbersCollection } from "./NumbersCollection";

interface Sortable{
    length:number //this could be a property or a getter!
    compare(leftIndex:number, rightIndex:number):boolean
    swap(leftIndex:number, rightIndex:number):void
}
/*
the general idea is to make sorting easier for us ,in a sense that in order to make a 
sorting algorithm for any data structure ;all we have to to is to figure out these three 
methods on them
*/



export default class Sorter{
    constructor(public collection:Sortable){}

    //bubble sort algorithm
    sort():void{
        const {length} = this.collection

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1;j++){

            if(this.collection.compare(j,j+1)){
                this.collection.swap(j,j+1)
            }

        }
    }
    }
}
