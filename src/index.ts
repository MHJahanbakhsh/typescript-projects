import fs from 'fs'

const matches = fs.readFileSync('football.csv',{
    encoding:'utf-8'  //if we dont pass this option it gives us back buffer(jewbrish)
})
.split('\n')
.map(e=>e.split(','))

enum MatchResult { 
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}


let  manUnitedWins = 0;
for(let match of matches){
    if(match[1]==='Man United' && match[5] ===MatchResult.HomeWin){ //using enum is just like object
        manUnitedWins++
    }else if(match[2]==='Man United' && match[5] ===MatchResult.AwayWin){
        manUnitedWins++
    }
}


console.log('man united won '+manUnitedWins+ ' games')
