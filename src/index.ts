import Sorter from "./sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

/*
//for numbers
const numberColec = new NumbersCollection([10,5,-3,0,214,3254,3464,63,413])
const sorter = new Sorter(numberColec)
sorter.sort() //does the actual sorting
console.log(numberColec)
*/



//for strings
/*
const charColec = new CharactersCollection('XskjdhdbXGFSDUGMPTZaddhaasddf')
const sorter = new Sorter(charColec)
sorter.sort()
console.log(charColec.data)
*/


//for LinkedList
const ll = new LinkedList()
ll.add(-3)
ll.add(45)
ll.add(-35)
ll.add(12)
ll.add(4)
ll.add(11)
const sorter = new Sorter(ll)
sorter.sort()
ll.print()