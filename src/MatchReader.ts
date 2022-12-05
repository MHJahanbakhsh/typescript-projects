import { dateStringToDate } from './utils'
import { MatchResult } from "./MatchResult";


type matchData = [Date, string, string, number,number, MatchResult, string]  //tuple. order matters


interface DataReader{
    read() :void;
    data:string[][]
}

export class MatchReader {
    matches:matchData[]=[]
    constructor(public reader:DataReader){}

    load():void{
        this.reader.read()
        this.matches = this.reader.data.map(
            (row:string[]):matchData=>{
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
        )
    };
}