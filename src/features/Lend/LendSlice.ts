import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Lend } from "../../models/Lend"
import { createLend , fetchLends} from "../../service/Lend"


export interface LendState {
    lends:Array<Lend>,
    historyLend:Array<Lend>
}

const initialState:LendState = {
    lends:[],
    historyLend:[]
}


export const addLend = createAsyncThunk(
    "",
    async (newLend:Lend) => {
     const { data } = await createLend (newLend);
      return data;
    }
  );

  export const getLends = createAsyncThunk("/lend", async () => {
    const { data } = await fetchLends();
    return data;
  });
export const LendSlice=createSlice({
    
    name:'lend',
    initialState,
    reducers:{
        // addLend:(state,action:PayloadAction<any>)=>{
        //     state.lends.push(action.payload)
        },

    extraReducers:(builder)=>{
        builder.addCase(addLend.fulfilled,(state,action:PayloadAction<any>)=>{
            state.historyLend.push(action.payload);
        })
        builder.addCase(getLends.fulfilled, (state, action: PayloadAction<any>) => {
            state.lends = action.payload;
           
          });
    }
    },
)

export const {}=LendSlice.actions
export default LendSlice.reducer