import axios from "axios";
import { Category } from "../models/Category";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/category",
  // baseURL:"https://jsonplaceholder.typicode.com"
});

export const fetchCategories = () => API.get("/category");

export const createCategory=(newCategory:Category)=>API.post("",newCategory);

export const deleteCategory =  (id:number) =>  API.delete(`/${id}`);