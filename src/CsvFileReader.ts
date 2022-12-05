import fs from 'fs'




export  class CsvFileReader{
    data: string[][] = [] 
    constructor(public fileName:string){} 

    read(){
        this.data = fs.readFileSync(this.fileName,{
            encoding:'utf-8'  //if we dont pass this option it gives us back buffer(jewwbrish)
        })
        .split('\n')
        //seperate each row to its own array
        .map((row:string):string[]=>row.split(','))
    
    }

}