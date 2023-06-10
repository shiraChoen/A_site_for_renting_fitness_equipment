//reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {Lend} from "../../models/Lend";
import { createLend } from "../../service/Lend";


//createAsyncThunk-middleware
//פרמטר ראשון טייפ ופרמטר השני פונקציה- בד"כ פרומיס
export const addLend = createAsyncThunk("lend/addLend", async (newLend:Lend) => {
  const { data } = await createLend(newLend);
  return data;
});

export interface lendState {
  lends: Array<Lend>,
  status:boolean
}

//סטייט גלובלי
const initialState: lendState = {
    //המערךכברירת מחדל ריק ומקבל את הנתונים מהדטה בייס
    lends: [],
    status: false
};

//createSlice-יוצרת רדוסר
//יוצרת טייפ
export const lendSlice = createSlice({
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  //action:type-סוג הפעולה
  //payload-הערך, המשתנה שקיבלתי
  name: "lend",
  initialState,
  //reducers- נכתוב את הפעולות
  reducers: {},
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {

//   //הפעולה הצליחה
//   builder.addCase(getCategories.fulfilled,(state, action: PayloadAction<any>)=>{
//     state.lends=action.payload;
// })
}
})
