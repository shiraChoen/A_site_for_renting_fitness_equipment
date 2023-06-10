import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { getUsers } from './UserSlice';
import { User } from '../../models/User';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ViewUsers() {
  const users=useSelector((state:RootState )=> state.User.users);
  const dispatch:AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user:User) => (user.status==0?(
            
            <StyledTableRow key={user.firstName}>
              <StyledTableCell component="th" scope="row">
              {user.id}
              </StyledTableCell>
              <StyledTableCell align="right">{user.firstName}</StyledTableCell>
              <StyledTableCell align="right">{user.lastName}</StyledTableCell>
              <StyledTableCell align="right">{user.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{user.eMail}</StyledTableCell>
            </StyledTableRow>
          ):<></>))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}