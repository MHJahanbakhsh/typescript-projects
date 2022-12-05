import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";


type matchData = [Date, string, string, number,number, MatchResult, string]  //tuple. order matters

export class MatchReader extends CsvFileReader<matchData>{

    mapRow(row: string[]):  matchData{
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, //this is type assertion.when we as a developer owerwrite typescript default behaviour
            row[6]
        ]
    }
}