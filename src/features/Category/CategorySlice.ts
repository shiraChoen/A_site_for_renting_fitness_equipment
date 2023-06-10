import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {Category} from "../../models/Category";
import { createCategory, deleteCategory, fetchCategories } from "../../service/Category";


  export const getCategories = createAsyncThunk("/Category", async () => {
    const { data } = await fetchCategories();
    return data;
  });

  export const deleteCategoryById = createAsyncThunk(
    "category",
    async (id: number) => {
      deleteCategory(id);
      return id;
    }
  );

  export const postCategory = createAsyncThunk(
    "category/post",
    async (newCategory: Category) => {
      const { data } = await createCategory(newCategory);
      return data;
    }
  );
  
  export interface categoryState {
    categories: Array<Category>,
    status:boolean
  }

const initialState:any = {
    categories:[],
    categoryId:null
}
export const CategorySlice =createSlice({
    name:'categories',
    initialState,
    reducers:{
      
              updateCategory:(state,action:PayloadAction<any>)=>{
                state.categoryId=action.payload;
        },
      
         
    },
    extraReducers:(builder)=>{
      builder.addCase(
        deleteCategoryById.fulfilled,
        (state, action: PayloadAction<any>) => {
          let categories = state.categories.filter((x:Category) => x.id !== action.payload.id);
          state.categories = categories;
         
        });
      builder.addCase(postCategory.fulfilled,(state, action: PayloadAction<Category>) => {
        state.categories.push(action.payload);
      })
       builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
          state.categories = action.payload;
          state.status = false;
        });

      }
})

export const { updateCategory}=CategorySlice.actions
export default CategorySlice.reducer