import axios from "axios";
import {Product} from "../models/Product";
import {Lend} from "../models/Lend";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/lend"
});


export const createLend=(newLend:Lend)=>API.post("",newLend);
export const fetchLends = () => API.get("/lend");