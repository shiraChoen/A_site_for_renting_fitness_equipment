import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import {Category} from "../../models/Category";
import { getCategories, updateCategory } from "./CategorySlice";


const CategoryView = () => {
  //categories מתקבל ע"י קרית שרת
  const categories = useSelector((state: RootState) => state.Category.categories);
  const dispatch: AppDispatch = useDispatch();
  const [categoryId, setCategoryId] = useState< Dispatch<SetStateAction<any>>>();
const navigate=useNavigate();
  useEffect(() => {
    dispatch(getCategories())
  }, []);
 console.log(categories);
 const selectCategory=(categoryId:any)=>{
  dispatch(updateCategory(categoryId));
  // setCategoryId(categoryId);
  // navigate("ProductViews",{state: { categoryId },replace: false})
  // navigate("ProductViews")
  navigate(`/${categoryId}`)
  // return <Navigate to="ProductViews"></Navigate>
 }
  return (
   
    <>
      {categories &&
        categories.map((category: Category) => (
          <ul>
            {/* <button onClick={() => dispatch(updateCategory(category.id))}> */}
            <button onClick={() => selectCategory(category.id)}>
              {category.name}
            </button>
          </ul>
        ))}
    </>
  );
};
export default CategoryView;


