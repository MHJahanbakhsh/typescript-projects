"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = __importDefault(require("./sorter"));
const CharactersCollection_1 = require("./CharactersCollection");
/*
//for numbers
const numberColec = new NumbersCollection([10,5,-3,0,214,3254,3464,63,413])
const sorter = new Sorter(numberColec)
sorter.sort() //does the actual sorting
console.log(numberColec)
*/
//for strings
const charColec = new CharactersCollection_1.CharactersCollection('XskjdhdbXGFSDUGMPTZaddhaasddf');
const sorter = new sorter_1.default(charColec);
sorter.sort();
console.log(charColec.data);
