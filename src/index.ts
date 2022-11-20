import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"


//for numbers
const numberColec = new NumbersCollection([10,5,-3464,63,413,-3,0,214,3254])
numberColec.sort()
console.log(numberColec)




//for strings
const charColec = new CharactersCollection('XskjdhdbXGFSDUGMPTZaddhaasddf')
charColec.sort()
console.log(charColec.data)



//for LinkedList

const ll = new LinkedList()
ll.add(-3)
ll.add(45)
ll.add(-35)
ll.add(12)
ll.add(4)
ll.add(11)
ll.sort()
ll.print()
