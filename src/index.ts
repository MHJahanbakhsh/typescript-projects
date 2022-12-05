import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

//create an object that satisfies the DataReader interface
const reader = new CsvFileReader('football.csv')

//create an instance of MatchReader and pass-in somthing that satisfies the DataReader interface
const matchReader = new MatchReader(reader)
matchReader.load()


let  manUnitedWins = 0;
for(let match of matchReader.matches){
    if(match[1]==='Man United' && match[5] ===MatchResult.HomeWin){ //using enum is just like object
        manUnitedWins++
    }else if(match[2]==='Man United' && match[5] ===MatchResult.AwayWin){
        manUnitedWins++
    }
}


console.log('man united won '+manUnitedWins+ ' games')
