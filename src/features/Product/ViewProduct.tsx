import  React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState} from "react";
import { AppDispatch, RootState } from '../../app/store';
import { addToCart, getProduct } from './ProductSlice';
import { Badge, ButtonGroup, Card, CardActions, CardContent, CardMedia, FormControlLabel, styled, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addLend } from '../Lend/LendSlice';
import { Product } from '../../models/Product';
// import CategoryView from '../Category/CategoryView';
import { useLocation, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
 
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const ProductViews=() =>{
  const [product,setProduct]=useState<Product>({ image:"" ,
     categoryId:"",
    id:"",
    name:"",
    model:"",
    description:"",
    brand:"",
    price:"",
    isDelivery:""});

  const [open1, setOpen1] = React.useState(false);
  

  const handleClickOpen = (c:Product) => {
    setOpen1(true);
    setProduct(c);
  };
  const handleClose = () => {
    setOpen1(false);
  };
  
  const products=useSelector((state:RootState )=> state.Product.products); 
  const cid= useSelector((state:RootState ) => state.Category.categoryId);
  
  const status= useSelector((state:RootState ) => state.Product.status);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const location=useLocation();
  // .filter((p)=>Number(p.id)===categoryId)
  
  const user=useSelector((state:RootState )=> state.User.currentUser); 
const {categoryId}=useParams();

 const a=useParams();
 
  const dispatch:AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  //  setFilteredProducts((cur)=>cur.filter((p)=>p?.categoryId?.toString()===cid))
  }, []);
 
  const selectProduct=(product:Product)=>{
    
    dispatch(addToCart(product));
    
  }
  return (
    <> 
    <h1>products</h1>
      {products &&
        products.map((p: Product) => 
        //  {p.categoryId?.toString()===categoryId ?(
          <> <Card  onClick={()=>handleClickOpen(p)} sx={{ maxWidth: 345 }}style={{display:"inline-block",padding:"1rem 1rem",height:"60vh",width:"20vw"}}>
            {p.image && <CardMedia 
              sx={{ height: 260}}
              image={require("../../pictures/" + p.image )}
              title="green iguana"
            />}
        <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.name}
          
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.price}
              </Typography>
            </CardContent>
            <CardActions>
          <Button onClick={()=>selectProduct(p)}> <AddShoppingCartIcon /></Button>
            </CardActions>
          </Card>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open1}
          >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
               {product.name}
          <Box sx={{ flexGrow: 0.2 }}  />
               {product.brand } :מבית  
          <Box sx={{ flexGrow: 0.2 }} />
               {product.model} :דגם 
          <Box sx={{ flexGrow: 0.2 }} />
               {product.description} 

              </BootstrapDialogTitle>
              <DialogContent dividers >
                <Typography gutterBottom >
                 <img src={'../../pictures/'+product.image} style={{width: '23vw', height: '38vh'} } />
                 {/* image={require("../../pictures/" + p.image )} */}
                </Typography>
                <Typography gutterBottom textAlign={"center"}>
                 מחיר : {product.price&&product.price.toString()} ש"ח
                </Typography>
               
                <Typography gutterBottom textAlign={"center"}>
                <button onClick={()=>selectProduct(product)}><AddShoppingCartIcon/></button>
                </Typography>
              </DialogContent>
            </BootstrapDialog></> 
          // ):<></>}
          )}
          </>);
    
           
}
export default ProductViews;