import  Home1  from "../features/User/Home1";
import { Navigate, useRoutes } from "react-router-dom";
import SignIn from "../features/User/signIn";
import SignUp from "../features/User/SignUP";
import Contact from "../features/User/contact";
import UserNavBar from "../features/User/UserNavBar";
import CheckOut from "../features/User/CheckOut";
// import ViewProduct from "../features/Product/ViewProduct";
import React from "react";
import UncontrolledExample from "../features/User/Home1";
import ViewUsers from "../features/User/ViewUsers";
import NavBar from "../features/User/NavBar";
import UserNavBar1 from "../features/User/UserNavBar1";
import CategoryViewNew from "../features/Category/CategoryViewNew";
import SignInSide from "../features/User/signIn";
import ProductViews from "../features/Product/ViewProduct";
import UpdateUser from "../features/User/updateUser";
import UseCategory from "../features/Category/AddCategory";
import DeleteCategory from "../features/Category/DeleteCategory";
import UpdateCategory from "../features/Category/UpdateCategory";

import DeleteProduct from "../features/Product/DeleteProduct";
import UpdateProduct from "../features/Product/UpdateProduct";
import UseProduct from "../features/Product/AddProduct";
import TextButtons from "./ViewManager";
import ShowCart from "./ShowCart";

import LendingHistory from "../features/User/LendingHistory";
import { Terms } from "./Terms";
import AddEmp from "../features/User/AddEmp";
// import AddCategory from "../features/Category/addCategory";

const Routing =()=>{
    let element=useRoutes([
    //  {path:"CategoryViewNew/:categoriId",element:<CategoryViewNew/>},
    {path:"ShowCart",element:<ShowCart/>},
    {path:"ViewManager",element:<TextButtons/>},
    {path:"AddCategory",element:<UseCategory/>},
    {path:"DeleteCategory",element:<DeleteCategory/>},
    {path:"UpdateCategory",element:<UseCategory/>},
    {path:"AddProduct",element:<UseProduct/>},
    {path:"UpdateProduct",element:<UpdateProduct/>},
    {path:"DeleteProduct",element:<DeleteProduct/>},
    {path:"AddEmp",element:<AddEmp/>},
    {path:"home1",element:<Home1/>},
    {path:"signIn",element:<SignInSide/>},
    {path:"SignUp",element:<SignUp/>},
    {path:"updateUser",element:<UpdateUser/>},
    {path:"Contact",element:<Contact/>},
    {path:"UserNavBar",element:<UserNavBar/>},
    {path:"UserNavBar1",element:<UserNavBar1/>},
    {path:"CheckOut",element:<CheckOut/>},
    {path:"/home1",element:<UncontrolledExample/>},
    {path:"/",element:<UncontrolledExample/>},
    {path:"ViewUsers",element:<ViewUsers/>},
    {path:"NavBar",element:<NavBar/>},
    {path:"ProductViews",element:<ProductViews/>},
     {path:"CategoryViewNew",element:<CategoryViewNew/>},
    {path:"CategoryViewNew/ProductViews",element:<ProductViews/>},
    {path:"Terms",element:<Terms/>},
    {path:"LendingHistory",element:<LendingHistory/>}
    
   

    ])
    
    return element;
}
export default Routing;