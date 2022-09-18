import { User } from "./User"
import { Company } from "./Compay"

// instructions to every other class,on how they can be an argument to addMarker
interface Mappable{

}

export class CustomMap{
    private googleMap:google.maps.Map

    constructor(divId:string ){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }
    /*bad code! why? cause these 2methods look very similar
    addUserMarker(user:User):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:user.location.lat,
                lng:user.location.lng
            }
        })
    }

    addCompanyMarker(company:Company):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:company.location.lat,
                lng:company.location.lng
            }
        })
    }
*/

//better code:
/*
addMarker(mappable:User | Company):void{ //there is a gotcha around this or operator for types "|".instead of union, there should be intersection

    new google.maps.Marker({
        map:this.googleMap,
        position:{
            lat:mappable.location.lat,
            lng:mappable.location.lng
        }
    })
}
*/

//best code:

}