
import { Category } from "./Category"
import { Lend } from "./Lend"

export interface Product{
    
    image: string | any
     categoryId?: never | any
    id?:bigint | any
    name:String | any
    model:String | any
    description:String | any
    brand:String | any
    price:number | any
    isDelivery:boolean | any
    // category:Category
    
    lendList?:Array<Lend>

}