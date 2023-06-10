import { Box } from "@mui/material";
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { Lend } from "../../models/Lend";

const LendingHistory=()=>{
    const history=useSelector((state:RootState)=>state.Lend.historyLend);
 
 
    return(
        <>
        <h1 style={{textAlign:"center"}}> my lending history</h1>
        {
            history.map((h:Lend)=><>
            
            {h.lendingDate}
            <Box sx={{ flexGrow: 0.2 }} />
            {h.returnDate}
            <Box sx={{ flexGrow: 0.2 }} />
            {h.user?.id}
            <Box sx={{ flexGrow: 0.2 }} />
            
            
            </>)
        }
        </>
    )
}
export default LendingHistory;
