"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase(); //because typicall it looks at charAt index which is diffrent for lower and uppercase
    }
    swap(leftIndex, rightIndex) {
        //strings are immutable so we have to do some tricks in order to swap characters:
        //1) convert to array ,to the swaping and convert back to string
        const arrStr = this.data.split('');
        let leftHand = arrStr[leftIndex];
        arrStr[leftIndex] = arrStr[rightIndex];
        arrStr[rightIndex] = leftHand;
        this.data = arrStr.join('');
        //2) use slice method(which returns new sliced string):
    }
}
exports.CharactersCollection = CharactersCollection;
