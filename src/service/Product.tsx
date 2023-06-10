import axios from "axios";
import {Product} from "../models/Product";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/product"
});


export const createProduct=(newProduct:Product)=>API.post("",newProduct);



export const fetchProducts = () => API.get("/product");


export const fetchSingleProduct =  (id:number) => API.get(`/${id}`)



export const deleteProduct =  (id:number) =>  API.delete(`/${id}`);





export const updateProduct = (product:Product) => API.put(`/${product.id}`, product)