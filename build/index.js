"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = __importDefault(require("./sorter"));
const NumbersCollection_1 = require("./NumbersCollection");
const numberColec = new NumbersCollection_1.NumbersCollection([10, 5, -3, 0]);
const sorter = new sorter_1.default(numberColec);
sorter.sort(); //does the actual sorting
console.log(sorter.collection);
//[5,-3,0,10]
