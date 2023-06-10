import { Product } from "./Product"
import { User } from "./User"

export interface Lend{
    id?:bigint
    lendingDate:Date
    returnDate:Date,
    user?:User|any,
    // product:Product
}