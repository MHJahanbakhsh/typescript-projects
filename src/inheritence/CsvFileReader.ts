import fs from 'fs'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'



type matchData = [Date, string, string, number,number, MatchResult, string]  //tuple. order matters

export class CsvFileReader{
    data: matchData[] = [] //we have array of tuples now. but the syntax is exactly like arrays
    constructor(public fileName:string){} 

    read(){
        this.data = fs.readFileSync(this.fileName,{
            encoding:'utf-8'  //if we dont pass this option it gives us back buffer(jewbrish)
        })
        .split('\n')
        //seperate each row to its own array
        .map(e=>e.split(','))
        //transform datatypes
        .map((row:string[]):matchData =>{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, //this is type assertion.when we as a developer owerwrite typescript default behaviour
                row[6]
            ]
        })
    
    }
}