import fs from 'fs'

export class CsvFileReader{
    data: string[][] = []
    constructor(public fileName:string){}

    read(){
        this.data = fs.readFileSync(this.fileName,{
            encoding:'utf-8'  //if we dont pass this option it gives us back buffer(jewbrish)
        })
        .split('\n')
        .map(e=>e.split(','))
    
    }
}