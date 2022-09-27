class Sorter{
    constructor(public collection:number[]){}

    //bubble sort algorithm
    sort():void{
        const {length} = this.collection

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1;j++){
            if(this.collection[j]>this.collection[j+1]){
                console.log({j})
                const leftHand = this.collection[j]
                this.collection[j] = this.collection[j+1]
                this.collection[j+1] = leftHand
                console.log(this.collection)
            }
        }
    }
    }
}

const sorter = new Sorter([10,5,-3,0])
sorter.sort() //does the actual sorting
console.log(sorter.collection)
//[5,-3,0,10]