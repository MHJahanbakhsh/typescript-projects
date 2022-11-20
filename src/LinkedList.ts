class theNode {
    next:theNode | null = null
    constructor(public data:Number){

    }
}

export class LinkedList{
    head:theNode | null = null

    add(data:Number):void{ //when we have 
        const node = new theNode(data)
        if(this.head){
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }else{
            this.head = node
        }
    }

    get length():Number{
        if(!this.head){
            return 0
        }else{
            let count = 1
            let current = this.head
            while(current.next){
                count++
                current = current.next
            }
            return count
        }
    }

    at(index:Number):theNode{
        if(!this.head) throw new Error('Index out of bounds!')
        let counter = 0
        let node  = this.head
        while(counter!==index && node.next){
            counter++
            node = node.next
        }
        return node
    }

    compare(leftIndex:number, rightIndex:number):boolean{
        if(!this.head){
            throw new Error('i have no head Nigga!')
        }
        if(this.at(leftIndex).data>this.at(rightIndex).data){
            return true
        }else{
            return false
        }
    }

    swap(leftIndex:number,rightIndex:number):void{
        if(this.compare(leftIndex,rightIndex)){
            let lefty = this.at(leftIndex).data
            let righty = this.at(rightIndex).data
             
            this.at(leftIndex).data = righty
            this.at(rightIndex).data = lefty
        }
    }

    print():void{
        if(!this.head) throw new Error('fuuck')
        else {
            let current:theNode | null = this.head;
            while(current){
                console.log(current)
                current = current.next
            }
        }
    }
}

const ll = new LinkedList()
ll.add(10)
ll.add(9)
ll.add(8)
ll.add(7)
// console.log(ll)
// console.log(ll.length)
// console.log(ll.at(2))
ll.print()