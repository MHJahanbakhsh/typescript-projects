"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
the general idea is to make sorting easier for us ,in a sense that in order to make a
sorting algorithm for any data structure ;all we have to to is to figure out these three
methods on them
*/
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    //bubble sort algorithm
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.default = Sorter;
