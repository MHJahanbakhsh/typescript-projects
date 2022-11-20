
/*
the general idea is to make sorting easier for us ,in a sense that in order to make a 
sorting algorithm for any data structure ;all we have to to is to figure out these three 
methods on them
*/



export default abstract class Sorter{
    abstract compare(leftIndex:number, rightIndex:number):boolean
    abstract swap(leftIndex:number, rightIndex:number):void
    abstract length:number //although its a getter we treat it as a property 


    //bubble sort algorithm
    sort():void{
        const {length} = this

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1;j++){

            if(this.compare(j,j+1)){
                this.swap(j,j+1)
            }

        }
    }
    }
}
