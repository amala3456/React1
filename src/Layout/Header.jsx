import { AppBar, Box,Toolbar, Typography,IconButton,Divider,Drawer} from '@mui/material'
import React,{ useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../Style/HeaderStyle.css'
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
 const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    < Box onClick={handleDrawerToggle} sx={{textAlign: "center" }}>
      <Typography 
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1,my:2}}
        >
        My Restaurant
        </Typography>

<Divider/>
<ul className='mobile-navigation'>
<li>
<Link to={'/'}>Home</Link>
</li>

<li>
<Link to={'/form'}>Form</Link>
</li>
<li>
<Link to={'/dash'}>Dashboard</Link>
</li>
</ul>
</Box>
  );
  return(
    <>
    <Box>
    < AppBar component={'nav'} sx={{bgcolor:"black"}}>
        <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{
                mr: 1,
                
              }}
              
              onClick={handleDrawerToggle} 
              >  
        <MenuIcon/>

        </IconButton>

        <Typography 
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1}}
        >
        <FastfoodIcon/>
        My Restaurant
        </Typography>

<Box sx={{ display: { xs: "none", sm: "block" } }}>
<ul className='navigation-menu'>
<li>
<Link to={'/'}>Home</Link>
</li>

<li>
<Link to={'/form'}>Form</Link>
</li>
<li>
<Link to={'/dash'}>Dashboard</Link>
</li>


</ul>

</Box>


</Toolbar>
</AppBar>

<Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block" },
           
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Box>
          <Toolbar />
        </Box>
        </Box>
</Box>
</>




  );
};

export default Header