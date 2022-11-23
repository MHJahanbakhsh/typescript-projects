export const dateStringToDate = (dateString:string):Date=>{
    //20/08/2018
    //new Date(year,month(starts from 0), day)
    const dateParts = dateString.split('/')
    .map((value:string):number=>{
        return parseInt(value)
    })

    return new Date(dateParts[2], dateParts[1]-1,dateParts[0])
} 