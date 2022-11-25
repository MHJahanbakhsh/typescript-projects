"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = []; //we have array of tuples now. but the syntax is exactly like arrays
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8' //if we dont pass this option it gives us back buffer(jewbrish)
        })
            .split('\n')
            //seperate each row to its own array
            .map(e => e.split(','))
            //transform datatypes
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
