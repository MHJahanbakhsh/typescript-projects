class Sorter{
    constructor(public collection:number[] | string /*| LinkedList*/ ){}

    //bubble sort algorithm
    sort():void{
        const {length} = this.collection

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1;j++){

                /*the reason that we call this bad approach is that everytime 
                we want to add another type  to be sorted, first we have to add that 
                to cunstructor function and then put another if statement here:
                
                if(this.collection instanceof LinkedList){....}
                 */

                //only works,if collection is an array of numbers
                if(this.collection instanceof Array){
            if(this.collection[j]>this.collection[j+1]){
                console.log({j})
                const leftHand = this.collection[j]
                this.collection[j] = this.collection[j+1]
                this.collection[j+1] = leftHand
                console.log(this.collection)
            }}

            //if collection is string;do this logic instead
            //~~~logic to compare and swap characters in a string
            if(typeof this.collection==='string'){
                
            }

        }
    }
    }
}

const sorter = new Sorter([10,5,-3,0])
sorter.sort() //does the actual sorting
console.log(sorter.collection)
//[5,-3,0,10]