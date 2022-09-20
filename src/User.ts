import {faker} from '@faker-js/faker'
import { Mappable } from './CustomMap';
export class User implements Mappable{ //this code indicates that every instance of User class should satisfy Mappable interface
    name:string;
    location:{
        lat:number
        lng:number
    }
    color:'red'
    constructor(){
       this.name = faker.name.firstName()
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    markerContent() :string{
        return `User Name: ${this.name}`
    }

}