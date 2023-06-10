import axios from "axios";
import {Product} from "../models/Product";
import {Lend} from "../models/Lend";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/user"
});

// Create a user
export const postUser=(newUser:any)=>API.post("",newUser);

export const fetchUsers = () => API.get("/user");

export const deleteUser =  (id:number) =>  API.delete(`/${id}`);