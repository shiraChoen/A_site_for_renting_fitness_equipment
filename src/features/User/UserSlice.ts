//reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import  {User}  from '../../models/User'
import { deleteUser, fetchUsers, postUser } from '../../service/User';
import { Product } from '../../models/Product';

export interface UsertState {
  users: Array<User>,
  status: boolean,
  loginUser:any,
  currentUser:any
}


//סטייט גלובלי
export const initialState = {
 users:[],
 loginUser:{},
 currentUser:{}
 
}

export const putUser = createAsyncThunk(
  "user/updateUser",
  async (user:User) => {
  //  const { data } = await (user);
  //   return data;
  }
);

export const postuser = createAsyncThunk(
  "user/post",
  async (newUser: User) => {
    const { data } = await postUser(newUser);
    return data;
  }
);

export const deleteUserById = createAsyncThunk(
  "user/delete",
  async (id: number) => {
    deleteUser(id);
    return id;
  }
);
export const getUsers = createAsyncThunk("/user", async () => {
  const { data } = await fetchUsers();
  return data;
});


export const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      state.users=action.payload;
    },
    saveUser: (state, action: PayloadAction<any>) => {
      state.currentUser=action.payload;
    },
    
  },
  extraReducers:(builder)=>{
    builder.addCase(postuser.fulfilled,(state, action: PayloadAction<any>) => {
      if(!action.payload)
      {
                
      }
      else{
      state.users=action.payload;
    }
    })

    builder.addCase(
      deleteUserById.fulfilled,
      (state, action: PayloadAction<any>) => {
        let users = state.users.filter((x:User) => x.id !== action.payload);
        state.users = users;
       
      }
    );
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
      
    });

  }
})

export const { updateUser,saveUser } = userSlice.actions

export default userSlice.reducer