import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card } from "antd";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch,RootState } from "../app/store";
import { addLend } from "../features/Lend/LendSlice";
import { Product } from "../models/Product";
 const ShowCart=()=>{
  const navigate=useNavigate();
  const newcart: never[]=[];let cart =useSelector((state:RootState)=>state.Product.cart)

let date1=new Date();
let newDate = new Date(date1.setMonth(date1.getMonth()+3));
const p =useSelector((state:RootState)=>state.Product)
const user =useSelector((state:RootState)=>state.User.currentUser)
const dispatch:AppDispatch=useDispatch();
const finishOrder=()=>{
 
    cart.map((c:Product)=>{
        dispatch(addLend({
            id:undefined,
            lendingDate:date1,
            returnDate:newDate,
            user:user,
            // product:p.
        }))
    })
  
cart=newcart;
    navigate("/LendingHistory");
  }
return(
<>

<h1>my cart</h1>
{cart&& cart.map((c:Product)=>{

  return <Card
            style={{marginTop:16}}
            type="inner"
            title={c.name}
            >
            {c.description}
             {c.price}
          </Card>
          })}
          <Button onClick={()=>finishOrder()}>סיום הזמנה</Button>
</>

);
}

export default ShowCart;



