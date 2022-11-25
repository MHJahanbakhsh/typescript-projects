import fs from 'fs'




export abstract class CsvFileReader<T>{
    data: T[] = [] //we have array of tuples now. but the syntax is exactly like arrays
    constructor(public fileName:string){} 
    abstract mapRow(row:string[]):T

    read(){
        this.data = fs.readFileSync(this.fileName,{
            encoding:'utf-8'  //if we dont pass this option it gives us back buffer(jewbrish)
        })
        .split('\n')
        //seperate each row to its own array
        .map(e=>e.split(','))
        //transform datatypes
        .map(this.mapRow)
    
    }

}