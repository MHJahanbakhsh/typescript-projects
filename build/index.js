"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
//create an object that satisfies the DataReader interface
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
//create an instance of MatchReader and pass-in somthing that satisfies the DataReader interface
const matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) { //using enum is just like object
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log('man united won ' + manUnitedWins + ' games');
