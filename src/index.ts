import Sorter from "./sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

/*
//for numbers
const numberColec = new NumbersCollection([10,5,-3,0,214,3254,3464,63,413])
const sorter = new Sorter(numberColec)
sorter.sort() //does the actual sorting
console.log(numberColec)
*/



//for strings
const charColec = new CharactersCollection('XskjdhdbXGFSDUGMPTZaddhaasddf')
const sorter = new Sorter(charColec)
sorter.sort()
console.log(charColec.data)
