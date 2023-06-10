import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import {Category} from "../../models/Category";
import { getCategories, updateCategory } from "./CategorySlice";
import cat1 from '../../pictures/cat1.jpg';
import cat from '../../pictures/catg.jpg';
import Button from '@mui/material/Button';
const CategoryViewNew = () => {

  const categories = useSelector((state: RootState) => state.Category.categories);
  const dispatch: AppDispatch = useDispatch();
  const [categoryId, setCategoryId] = useState< Dispatch<SetStateAction<any>>>();
  const navigate=useNavigate();
  
useEffect(() => {
    dispatch(getCategories())
  }, []);

const selectCategory=(categoryId:any)=>{
   console.log(categoryId+" categoryId");
   dispatch(updateCategory(categoryId));
  // setCategoryId(categoryId);
   navigate("ProductViews",{state: { categoryId },replace: false})
 // navigate(`${categoryId}`,{state: { categoryId }})
  // return <Navigate to="ProductViews"></Navigate>
 }
  return (
   
    <>
     <img src={cat} style={{ width: '650px', height: '100px' }}/>
     {/* <img src={cat1} style={{ width: '200px', height: '200px' }}/> */}
      {categories &&
        categories.map((category: Category) => (
          <ul>
            
            <Button color="secondary" onClick={() => selectCategory(category.id)}>{category.name}</Button>
          </ul>
        ))}
          <Outlet/>
    </>
  );
};
export default CategoryViewNew;


