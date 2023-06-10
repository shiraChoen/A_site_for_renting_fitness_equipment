import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createProduct, deleteProduct, fetchProducts ,updateProduct} from "../../service/Product";
import { Product } from "../../models/Product";

export const getProduct = createAsyncThunk("", async () => {
    const { data } = await fetchProducts();
    return data;
  });

  
export const postProduct = createAsyncThunk(
    "product/post",
    async (newProduct: Product) => {
      const { data } = await createProduct(newProduct);
     
      return data;
    }
  );
  
  export const deleteProductById = createAsyncThunk(
    "product/delete",
    async (id: number) => {
       deleteProduct(id);
      return id;
    }
  );
  
  
  export const putProduct = createAsyncThunk(
    "product/update",
    async (product:Product) => {
      const { data } = await updateProduct(product);
      return data;
    }
  );
  export interface ProductState {
    products: Array<Product>,
    status: boolean,
    cart:Array<Product>
  }


const initialState:ProductState = {
    products:[],
    status: false,
    cart:[]
};
export const ProductSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<any>)=>{
            state.products.push(action.payload)
        },
        addToCart:(state,action:PayloadAction<any>)=>{
          state.cart.push(action.payload)
          
      },
    },
    extraReducers:(builder)=>{
      builder.addCase(getProduct.fulfilled, (state, action: PayloadAction<any>) => {

        state.products = action.payload;
        state.status = false;
      });
      builder.addCase(getProduct.pending, (state) => {
        state.status = true;
      });
      //פעולה נכשלה
      builder.addCase(
        getProduct.rejected,
        (state, action: PayloadAction<any>) => {}
      );
      builder.addCase(
        deleteProductById.fulfilled,
        (state, action: PayloadAction<any>) => {
          let products = state.products.filter((x) => x.id !== action.payload);
          state.products = products;
        }
      );
      builder.addCase(postProduct.fulfilled,(state, action: PayloadAction<Product>) => {
        state.products.push(action.payload);
      })

    }
});

export const{addProduct,addToCart}=ProductSlice.actions
export default ProductSlice.reducer