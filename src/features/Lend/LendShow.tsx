import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { Lend } from "../../models/Lend";
import { getLends } from "./LendSlice";

const LendsShow=()=>{
    const lends=useSelector((state:RootState)=>state.Lend.lends);
  console.log(lends)
  const dispatch:AppDispatch = useDispatch();
  


  React.useEffect(() => {
    dispatch(getLends());
  }, []);
 
    return(
        <>
        <h1 style={{textAlign:"center"}}>היסטורית השאלות</h1>
        {
            lends.map((h:Lend)=><>
            
            {h.lendingDate}
            <Box sx={{ flexGrow: 0.2 }} />
            {h.returnDate}
            <Box sx={{ flexGrow: 0.2 }} />
            {h.user?.id}
            <Box sx={{ flexGrow: 0.2 }} />
            <h1>---------</h1>
            </>)
        }
        </>
    )
}
export default LendsShow;