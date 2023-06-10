
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LendsShow from '../features/Lend/LendShow';
import ViewUsers from '../features/User/ViewUsers';

import AddEmp from '../features/User/AddEmp';
import AddCategory from '../features/Category/AddCategory';
import UpdateCategory from '../features/Category/UpdateCategory';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TextButtons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
    <Box
      sx={{ flexGrow: 2, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
               <div className='man'>
       
                 <h1 >Hi Manager </h1>
                
                </div>
               
                
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'ActiveBorder' }}
      >
        <Tab label="All Lendind History" {...a11yProps(0)} />
        <Tab label="View Users" {...a11yProps(1)} />
        <Tab label="Add Category" {...a11yProps(2)} />
        <Tab label="Add Employee" {...a11yProps(3)} />
        <Tab label="Update Category" {...a11yProps(4)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <LendsShow></LendsShow>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ViewUsers></ViewUsers>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <AddCategory></AddCategory>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddEmp></AddEmp>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <UpdateCategory></UpdateCategory>
      </TabPanel>
     
    </Box>
  );
}