import Sorter from "./sorter"
import { NumbersCollection } from "./NumbersCollection"

const numberColec = new NumbersCollection([10,5,-3,0])
const sorter = new Sorter(numberColec)
sorter.sort() //does the actual sorting
console.log(sorter.collection)
//[5,-3,0,10]